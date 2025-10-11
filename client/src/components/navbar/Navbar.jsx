import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './navbar.module.css'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/authSlice'
import { emptyCart } from '../../redux/cartSlice'

import axios from 'axios';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { products } = useSelector((state) => state.cart)
  // const [loginState, setLoginState] = useState({ username: '', isAdmin: false })
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // window.onscroll = () => {
  //   setIsScrolled(window.pageYOffset === 0 ? false : true)
  //   return () => (window.onscroll = null)
  // }

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true)
    return () => (window.onscroll = null)
  }




  const { user } = useSelector((state) => { return state.auth });
  console.log('user', user);

  let username = user ? user.username : '';
  let isAdmin = user ? user.isAdmin : '';

  const handleLogout = () => {
    if (user) {
      dispatch(logout())
      dispatch( emptyCart() )
      navigate('/login')
    }
    else{navigate('/login')}

  }

  // useEffect(()=>{
  //   if(user!=null){
  //     setLoginState(previousState => {
  //       return {
  //           ...previousState,
  //           username: username,
  //           isAdmin: isAdmin
  //       }
  //   })
  //   }
  // },[user])



  const handleSpotify = async () => {


    axios.get('http://localhost:5000/spotify')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });


  }




  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        {/* <nav> */}
        <div className={classes.left}>
          <Link to='/' className={classes.title}>
            WebDevMania
          </Link>
        </div>
        <div className={classes.center}>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={classes.listItem}>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li className={classes.listItem}>
              <Link to="/foods">Foods</Link>
            </li>
            <li className={classes.listItem}>
              <Link to="/faq">FAQ</Link>
            </li>
            <li className={classes.listItem}>
              <Link to='/create'>Create</Link>
            </li>
          </ul>
        </div>
        <div className={classes.right}>

          <Link to='/cart' className={classes.cartContainer}>
            <AiOutlineShoppingCart className={classes.cartIcon} />
            <div className={classes.cartQuantity}>{products.length}</div>
          </Link>

          <button onClick={handleSpotify} className={classes.logout}>SpotifyApp</button>

          {
            user ? <button onClick={handleLogout} className={classes.logout}>Logout</button> :
              <button onClick={handleLogout} className={classes.logout}>Login  </button>
          }

          {/* <div>
          <div style={{color:'#000', fontSize: '20px'}}>{username}</div> 
          <sup>{isAdmin ? <div style={{color:'red', fontSize: '8px'}}>admin</div> : ''}</sup>
          </div> */}

          <p>{username} {isAdmin ? <sup style={{ color: 'red', fontSize: '8px' }}>admin</sup> : <sup style={{ color: 'red', fontSize: '8px' }}>client</sup>}</p>






          {/* <Link to='/' className={classes.cartContainer}>
          <AiOutlineUser className={classes.userIcon} />
            <div className={classes.isAdmin}></div>
          </Link> */}

          {
            error && <div className={classes.errorMessage}>
              no token
            </div>
          }
        </div>
        {/* </nav> */}
      </div>
    </div>
  )
}

export default Navbar






















// const generateRandomString = (length) => {
//   const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   const values = crypto.getRandomValues(new Uint8Array(length));
//   return values.reduce((acc, x) => acc + possible[x % possible.length], "");
// }

// const codeVerifier = generateRandomString(64);

// //////////////////////////////////////////////////////////////////////////////////////
// const sha256 = async (plain) => {
//   const encoder = new TextEncoder()
//   const data = encoder.encode(plain)
//   return window.crypto.subtle.digest('SHA-256', data)
// }

// const base64encode = (input) => {
//   return btoa(String.fromCharCode(...new Uint8Array(input)))
//     .replace(/=/g, '')
//     .replace(/\+/g, '-')
//     .replace(/\//g, '_');
// }

// /////////////////////////////////////////////////////////////////////////////////////////


// const hashed = sha256(codeVerifier)
// const codeChallenge = base64encode(hashed);

// //////////////////////////////////////////////////////////////////////////////////////////


// const clientId = 'e257dc917f8640b5a9afe2f6e6ac1ef9';
// const redirectUri = 'http://127.0.0.1:3000';




// const scope = 'user-read-private user-read-email';
// const authUrl = new URL("https://accounts.spotify.com/authorize")

// // generated in the previous step
// window.localStorage.setItem('code_verifier', codeVerifier);

// const params = {
//   response_type: 'code',
//   client_id: clientId,
//   scope,
//   code_challenge_method: 'S256',
//   code_challenge: codeChallenge,
//   redirect_uri: redirectUri
// }

// authUrl.search = new URLSearchParams(params).toString();
// window.location.href = authUrl.toString();