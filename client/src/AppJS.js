import './App.css';
import {Routes, Route} from 'react-router-dom'
// import Navbar from './components/navbar/Navbar';
// import Footer from './components/footer/Footer';
// import Home from './components/home/Home';
// import Login from './components/login/Login';
// import Signup from './components/signup/Signup';
// import Create from './components/create/Create';
// import FoodDetails from './components/foodDetails/FoodDetails';
// import FoodCatalog from './components/foodCatalog/FoodCatalog';
// import Cart from './components/cart/Cart';
// import Checkout from './components/checkout/Checkout';
import {useLocation} from 'react-router-dom'
import { useEffect } from 'react';

//navbar
// import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './navbar.module.css'
import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/authSlice'


//home
// import Hero from '../hero/Hero'
// import classes from './home.module.css'
import illustration1 from '../../assets/male-delivery-guy-riding-scooter.svg'
import illustration2 from '../../assets/delivery-location.svg'
import illustration3 from '../../assets/deliveryman-with-pizza.svg'
// import Foods from '../foods/Foods'
// import Newsletter from '../newsletter/Newsletter'


//login
// import React from 'react'
// import { useState } from 'react'
import classes from './login.module.css'
// import {useDispatch} from 'react-redux'
// import {Link, useNavigate} from 'react-router-dom'
import img from '../../assets/womaneating2.jpg'
import { login } from '../../redux/authSlice'



//signup
// import React from 'react'
// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
import classes from './signup.module.css'
import img from '../../assets/womaneating.jpg'
import { register } from '../../redux/authSlice'
// import { useDispatch } from 'react-redux'


//create
// import React from 'react'
import classes from './create.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'



//fooddetails
// import React from 'react'
import classes from './foodDetails.module.css'
// import { useState } from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import {useParams} from 'react-router-dom'
// import { useEffect } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { addProduct } from '../../redux/cartSlice'


//foodCatalog
// import React from 'react'
// import { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import classes from './foodCatalog.module.css'
// import { useEffect } from 'react'


//cart
// import React from 'react'
// import classes from './cart.module.css'
// import {useDispatch, useSelector} from 'react-redux'
import {AiOutlineClose} from 'react-icons/ai'
import { removeProduct } from '../../redux/cartSlice'
// import {useNavigate} from 'react-router-dom'


//checkout
// import React from 'react'
// import { useSelector } from 'react-redux'
import classes from './checkout.module.css'



//hero
// import React from 'react'
import classes from './hero.module.css'
import {AiOutlineArrowDown} from 'react-icons/ai'
import manEating from '../../assets/man-having-his-meal.svg'



//footer
// import React from "react"
import classes from "./footer.module.css"
import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai"


//newsletter
// import React from 'react'
import classes from './newsletter.module.css'
import {AiOutlineSend} from 'react-icons/ai'
import newsletterIllustration from '../../assets/get-newsletter-updates.svg'



function AppJS() {
    // const location = useLocation()
    
    // useEffect(() => {
    //   window.scrollTo(0, 0)
    // }, [location.pathname])
   
   
     return (
       <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/create' element={<Create />} />
            <Route path='/food/:id' element={<FoodDetails />} />
            <Route path='/foods' element={<FoodCatalog />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Footer />
       </div>
     );
   }
   
 export default AppJS;









const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const {products} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/' className={classes.title}>
            WebDevMania
          </Link>
        </div>
        <div className={classes.center}>
          <ul className={classes.list}>
          <li className={classes.listItem}>
              <a href="#">Home</a>
            </li>
            <li className={classes.listItem}>
              <a href="#contacts">Contacts</a>
            </li>
            <li className={classes.listItem}>
              <a href="#foods">Foods</a>
            </li>
            <li className={classes.listItem}>
              <a href="#faq">FAQ</a>
            </li>
            <li className={classes.listItem}>
              <Link to='/create'>Create</Link>
            </li>
          </ul>
        </div>
        <div className={classes.right}>
          <AiOutlineUser className={classes.userIcon}/>
          <Link to='/cart' className={classes.cartContainer}>
            <AiOutlineShoppingCart className={classes.cartIcon} />
            <div className={classes.cartQuantity}>{products.length}</div>
          </Link>
          <button onClick={handleLogout} className={classes.logout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

// export default Navbar








   //    home

   
   const Home = () => {
     return (
       <div className={classes.container}>
         <div className={classes.wrapper}>
           <Hero />
           <div className={classes.delivery}>
             <div className={classes.titles}>
               <span className={classes.deliverySubtitle}>Delivery</span>
               <h2 className={classes.deliveryTitle}>Always on time for you</h2>
             </div>
             <div className={classes.deliveryInfos}>
               <div className={classes.deliveryInfo}>
                 <img src={illustration1} alt="" className={classes.firstImg}/>
                 <h3>Our delivery guy is always on time</h3>
               </div>
               <div className={classes.deliveryInfo}>
                 <img src={illustration2} alt="" className={classes.secondImg}/>
                 <h3>He works very hard</h3>
               </div>
               <div className={classes.deliveryInfo}>
                 <img src={illustration3} alt="" className={classes.thirdImg}/>
                 <h3>He is friendly and social</h3>
               </div>
             </div>
           </div>
           <Foods />
           <Newsletter />
         </div>
       </div>
     )
   }
   
//    export default Home





// login


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async(e) => {
      e.preventDefault()

      try {
        const res = await fetch(`http://localhost:5000/auth/login`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({email, password})
        })

        const data = await res.json()
        console.log(data)
        dispatch(login(data)) // {userInfo, token}
        navigate("/")
        
      } catch (error) {
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 3000)
      }
  }

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeftSide}>
          <img src={img} className={classes.leftImg}/>
        </div>
        <div className={classes.loginRightSide}>
          <h2 className={classes.title}>Login</h2>
          <form onSubmit={handleLogin} className={classes.loginForm}>
            <input type="email" placeholder='Type email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Type password' onChange={(e) => setPassword(e.target.value)}/>
            <button className={classes.submitBtn}>Login</button>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          </form>
          {
            error && <div className={classes.errorMessage}>
                 Wrong credentials! Try different ones
            </div>
          }
        </div>
      </div>
    </div>
  )
}

// export default Login




// signup


const Signup = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignup = async(e) => {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:5000/auth/register`, {
        headers: {
          "Content-Type": 'application/json'
        },
        method: "POST",
        body: JSON.stringify({username, email, password})
      })

      const data = await res.json()
      dispatch(register(data))
      navigate('/')
      
    } catch (error) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    }
  }


  return (
    <div className={classes.signUpContainer}>
      <div className={classes.signUpWrapper}>
        <div className={classes.signUpLeftSide}>
          <img src={img} className={classes.leftImg} />
        </div>
        <div className={classes.signUpRightSide}>
          <h2 className={classes.title}>Sign Up</h2>
          <form onSubmit={handleSignup} className={classes.signUpForm}>
            <input type="text" placeholder="Type username" onChange={(e) => setUsername(e.target.value)}/>
            <input type="email" placeholder="Type email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Type password"  onChange={(e) => setPassword(e.target.value)}/>
            <button className={classes.submitBtn}>Sign Up</button>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </form>
          {
            error && (
              <div className={classes.errorMessage}>
                 Wrong credentials! Try different ones.
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

// export default Signup







// create



const Create = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const [review, setReview] = useState("")
  const navigate = useNavigate()
  // we get the auth slice from the entire state, which(auth slice) 
  // is the userInfo and the token
  const { token } = useSelector((state) => state.auth)


  // type="file", e.target.files[0]
  const onChangeFile = (e) => {
    setImage(e.target.files[0])
  }

  const handleCloseImg = () => {
    setImage('')
  }

  const handleCreateProduct = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()
      let filename = null

      if (image) {
        filename = Date.now() + image.name
        formData.append("filename", filename)
        formData.append("image", image)

        await fetch(`http://localhost:5000/upload/image`, {
          headers: {
            "Authorization": `Bearer ${token}`
          },
          method: "POST",
          body: formData
        })
      }

      // uploading product 
      const res = await fetch(`http://localhost:5000/product`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          category,
          img: filename,
          price,
          review
        })
      })

      const food = await res.json()

      navigate(`/food/${food._id}`)

    } catch (error) {
      console.error(error.message)
    }
  }



  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Create food</h2>
        <form onSubmit={handleCreateProduct} encType="multipart/form-data">
          <div className={classes.inputWrapper}>
            <label>Title: </label>
            <input type="text"
              placeholder='Title...'
              className={classes.input}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Description: </label>
            <input type="text"
              placeholder='Description...'
              className={classes.input}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Category: </label>
            <input type="text"
              placeholder='Category...'
              className={classes.input}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapperImage}>
            <label htmlFor="image" className={classes.labelFileInput}>Image: <span>Upload here</span></label>
            <input type="file"
              id="image"
              placeholder='Image...'
              className={classes.input}
              onChange={onChangeFile}
              style={{ display: 'none' }}
            />
            {image && <p className={classes.imageName}>{image.name} <AiOutlineCloseCircle onClick={handleCloseImg} className={classes.closeIcon} /></p>}
          </div>
          <div className={classes.inputWrapper}>
            <label>Price: </label>
            <input type="number"
              step={0.01}
              placeholder='Price...'
              className={classes.input}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Review: </label>
            <input type="number"
              step={0.1}
              min={1}
              max={5}
              placeholder='Review...'
              className={classes.input}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div className={classes.buttonWrapper}>
            <button type="submit" className={classes.submitBtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// export default Create








// foodDetails


const FoodDetails = () => {
  const [foodDetails, setFoodsDetails] = useState('')
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const {id} = useParams()
  const {token} = useSelector((state) => state.auth)
  const {products} = useSelector((state) => state.cart)
  console.log(products)

  useEffect(() => {
     const fetchFoodDetails = async() => {
      const res = await fetch(`http://localhost:5000/product/find/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      const data = await res.json()
      setFoodsDetails(data)
     }
     fetchFoodDetails()
  }, [id])

  const changeQuantity = (command) => {
    if(command === 'dec'){
       if(quantity === 1) return
       setQuantity(prev => prev - 1)
    } else if(command === 'inc'){
       setQuantity(prev => prev + 1)
    }
  }

  const addToCart = () => {
    dispatch(addProduct({...foodDetails, quantity}))
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <img src={`http://localhost:5000/images/${foodDetails?.img}`}/>
        </div>
        <div className={classes.right}>
          <h2 className={classes.title}>{foodDetails?.title}</h2>
          <div className={classes.price}>
            Price: <span>$</span> {foodDetails?.price}
          </div>
          <div className={classes.quantity}>
            <button disabled={quantity === 1} onClick={() => changeQuantity('dec')}>-</button>
            <span className={classes.quantityNumber}>{quantity}</span>
            <button onClick={() => changeQuantity('inc')}>+</button>
          </div>
          <div className={classes.category}>
            <h3>Category: </h3>
            <span className={classes.categoryName}>{foodDetails?.category}</span>
          </div>
          <div className={classes.productDesc}>
            <div>Description: </div>
            <p>
              {foodDetails?.desc?.length > 50 ? `${foodDetails?.desc}`.slice(0, 50) : foodDetails?.desc}
            </p>
          </div>
          <button onClick={addToCart} className={classes.addToCart}>Add To Cart <AiOutlineShoppingCart /></button>
        </div>
      </div>
    </div>
  )
}

// export default FoodDetails







// FoodCatalog


const FoodCatalog = () => {
  const [filteredFoods, setFilteredFoods] = useState([])
  const location = useLocation()
  const foodEndpoint = location.pathname.split('/')[2]
  const { token } = useSelector((state) => state.auth)

  useEffect(() => {
    const fetchFoodType = async () => {
      const res = await fetch(`http://localhost:5000/product?category=${foodEndpoint}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      const data = await res.json()
      setFilteredFoods(data)
    }
    fetchFoodType()
  }, [foodEndpoint])


  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {filteredFoods?.length !== 0 && <h2 className={classes.title}>The best {foodEndpoint} in the region</h2>}
        <div className={classes.foods}>
          {filteredFoods.length !== 0 ? filteredFoods.map((f) => (
            <Link to={`/food/${f._id}`} key={f._id} className={classes.food}>
              <div className={classes.imgContainer}>
                <img src={`http://localhost:5000/images/${f?.img}`} className={classes.foodImg} />
              </div>
              <div className={classes.foodDetails}>
                <h4 className={classes.foodTitle}>{f?.title}</h4>
                <span className={classes.price}><span>$</span> {f?.price}</span>
              </div>
            </Link>
          )) : <h1 className={classes.noQuantity}>No {foodEndpoint} right now</h1>}
        </div>
      </div>
    </div>
  )
}

// export default FoodCatalog








//cart


const Cart = () => {
  const {products} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let totalPrice = 0
  products.map((product) => totalPrice += (product.quantity * product.price))

  const handleRemoveProduct = (id) => {
    console.log(id)
     dispatch(removeProduct({_id: id}))
  }

  const handleOrder = () => {
    if(products.length > 0){
      navigate('/checkout')
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          {products.length > 0 ? products.map((product) => (
              <div key={product._id} className={classes.product}>
                <div onClick={() =>handleRemoveProduct(product._id)} className={classes.closeBtn}><AiOutlineClose /></div>
                <img src={`http://localhost:5000/images/${product.img}`} className={classes.img}/>
                <div className={classes.productData}>
                  <h3 className={classes.title}>{product.title}</h3>
                  <div className={classes.productAndQuantity}>
                    <span className={classes.quantity}>{product.quantity} x </span>
                    <span className={classes.price}><span>$</span>{product.price}</span>
                  </div>
                </div>
              </div>
          )) : <h1 className={classes.noProducts}>No products in the cart. Go shopping!</h1>}
        </div>
        <div className={classes.right}>
          <div className={classes.totalProductMsg}>Total products: {products.length}</div>
          <div className={classes.subtotalCheckoutBtns}>
            <span className={classes.subtotal}>Subtotal: ${totalPrice}</span>
            <span onClick={handleOrder} disabled={products.length === 0} className={classes.orderNowBtn}>Order now</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// export default Cart








//checkout

const Checkout = () => {
  const {products} = useSelector((state) => state.cart)

  let totalPrice = 0
  products.map((product) => totalPrice += (product.quantity * product.price))
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Your order is successful</h2>
        <p>Expect it in 1 hour</p>
        <span>Total Price: ${totalPrice}</span>
      </div>
    </div>
  )
}

// export default Checkout







//hero


const Hero = () => {
  return (
    <section style={{height: '200vh'}} id="home" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Do you crave delicious food</h2>
          <p className={classes.firstMsg}>But going out to take <span>food costs time....</span></p>
          <p className={classes.secondMsg}>
            Why not order <span>pizza</span> or something <br /> <span>delicious </span>
            from our restaurnt
          </p>
          <p className={classes.desc}>
            Our restaurant always puts the client above.
            They are our single most important thing for our business.
          </p>
          <div className={classes.buttons}>
            <button className={classes.buttonOrder}>Order now!</button>
            <button className={classes.buttonSee}><a href="#foods">See what's available <AiOutlineArrowDown/> </a></button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={manEating} alt="" className={classes.manEatingImg}/>
        </div>
      </div>
    </section>
  )
}

// export default Hero







//footer


const Footer = () => {
  return (
    <section id="faq" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2 className={classes.title}>Working days</h2>
          <ul className={classes.list}>
            <li>Monday - Friday</li>
            <li className={classes.workingTime}>08:00 - 22:00</li>
            <li>Saturday</li>
            <li className={classes.workingTime}>08:00 - 20:00</li>
          </ul>
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Newsletter</h2>
          <ul className={classes.list}>
            <li>Subscribe to our newsletter</li>
            <li>Receive the latest meals</li>
            <li>Get the menu with promos</li>
            <li>Everything weekly!</li>
          </ul>
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Social Media</h2>
          <ul className={classes.iconList}>
            <li><AiFillInstagram /></li>
            <li><AiFillFacebook /></li>
            <li><AiFillTwitterCircle /></li>
          </ul>
        </div>
      </div>
        <div className={classes.attribution}>
        <h3>Special thanks to IconScout for the illustrations: </h3>
        <div style={{marginLeft: '6px'}}>
        <div><a rel="noreferrer" href="https://iconscout.com/illustrations/man" target="_blank">Man having his meal Illustration</a> by <a href="https://iconscout.com/contributors/iconscout">IconScout Store</a> on <a href="https://iconscout.com">IconScout</a></div>
        <div><a rel="noreferrer" href="https://iconscout.com/illustrations/male" target="_blank">Male delivery guy riding scooter Illustration</a> by <a rel="noreferrer" href="https://iconscout.com/contributors/iconscout" target="_blank">IconScout Store</a> </div>
        <div><a rel="noreferrer" href="https://iconscout.com/illustrations/delivery-location" target="_blank">Delivery Location Illustration</a> by <a rel="noreferrer" href="https://iconscout.com/contributors/tdaystudio" target="_blank">Tdays Tudio</a></div>
        <div><a rel="noreferrer" href="https://iconscout.com/illustrations/deliveryman-with-pizza" target="_blank">Deliveryman with pizza Illustration</a> by <a href="https://iconscout.com/contributors/tranto">Lord Anon</a> on <a href="https://iconscout.com">IconScout</a></div>
        <div><a rel="noreferrer" href="https://iconscout.com/illustrations/get-newsletter-updates" target="_blank">Get newsletter updates Illustration</a> by <a rel="noreferrer" href="https://iconscout.com/contributors/Aleshaku" target="_blank">Ilusiku Studio</a></div>
        </div>
       </div>
    </section>
  )
}

// export default Footer








//Newsletter


const Newsletter = () => {
  return (
    <section id='contacts' className={classes.container}>
      <div className={classes.wrapper}>
        <h4 className={classes.subtitle}>Get our latest offers</h4>
        <h2 className={classes.title}>Newsletter</h2>
        <div className={classes.inputContainer}>
          <input type="text" placeholder='Enter email...'/>
          <AiOutlineSend className={classes.sendIcon}/>
        </div>
        <img src={newsletterIllustration} className={classes.illustration} alt=""/>
      </div>
    </section>
  )
}

// export default Newsletter