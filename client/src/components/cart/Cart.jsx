
import React from 'react'
import classes from './cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import { removeProduct, incProduct, decProduct, emptyCart } from '../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

import { config } from '../../Constants';
const URL = config.api;


// cart showing order product, quantity, increase decrease quantity, place final order here
const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const { user, token } = useSelector((state) => state.auth);
  console.log('Cart ',products, user);
  const dispatch = useDispatch()
  const navigate = useNavigate()


 // change quantity of product
  const increaseProduct = (id) => {
    console.log(id)
    dispatch(incProduct({ _id: id }))
  }

  const decreaseProduct = (id) => {
    console.log(id)
    dispatch(decProduct({ _id: id }))
  }


  // show order totat price
  let totalPrice = 0
  products.map((product) => totalPrice += (product.quantity * product.price))

  // handle remove product
  const handleRemoveProduct = (id) => {
    console.log(id)
    dispatch(removeProduct({ _id: id }))
  }

  // handle to order cart products, it navigates to checkout
  const handleOrder = async() => {
    if (products.length > 0) {



      try {
        
        // sending order
        // const res = await fetch(`http://localhost:5000/product`, {
        const res = await fetch(`${URL}/auth/order`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          method: 'POST',
          body: JSON.stringify({
            products,
            user
          })
        })

  
        const order = await res.json()
        console.log(order)
  
        navigate('/foods')
  
      } catch (error) {
        console.error(error)
      }


      navigate('/checkout')
      // dispatch( emptyCart() )
    }
    
  }

  // cart component code
  return (
    
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          {products.length > 0 ? products.map((product) => (
            <div key={product._id} className={classes.product}>
              <div onClick={() => handleRemoveProduct(product._id)} className={classes.closeBtn}><AiOutlineClose /></div>



              {/* <img src={`http://localhost:5000/images/${product.img}`} alt='' className={classes.img} /> */}
              <img src={`${URL}/images/${product.img}`} alt='' className={classes.img} />
              {/* <img src={`/images/${product.img}`} alt='' className={classes.img} /> */}
              <div className={classes.productData}>
                <h4 className={classes.title}>{product.title}</h4>
                <span style={{fontWeight:'lighter'}}>{product.review} ★</span>
                <h6 className={classes.subtitle}>{product.desc}</h6>



                <div className={classes.productAndQuantity}>
                  <span className={classes.quantity}>{product.quantity} x </span>
                  <span className={classes.price}><span>₹</span>{product.price}</span>
                </div>
                <div className={classes.quantityIncDec}>
                  <button style={{color:'red', backgroundColor:'#f2f2f2', fontSize: '12px', fontWeight: 'bold', padding: '5px', border: '2px solid red', borderRadius: '50px'}} disabled={product.quantity === 1} onClick={() => decreaseProduct(product._id)}> -1 </button>
                  <span className={classes.price}><span> qty </span> {product.quantity} </span>
                  <button style={{color:'red', backgroundColor:'#f2f2f2', fontSize: '12px', fontWeight: 'bold', padding: '5px', border: '2px solid red', borderRadius: '50px'}} onClick={() => increaseProduct(product._id)}> +1 </button>
                </div>
              </div>
            </div>
          )) : <h1 className={classes.noProducts}>No products in the cart. Go shopping!</h1>}
        </div>
        <div className={classes.right}>
        
          <div className={classes.totalProductMsg}>Total products: {products.length}</div>
          <div className={classes.subtotalCheckoutBtns}>
            <span className={classes.subtotal}>Subtotal: ₹{totalPrice}</span>
            <span onClick={handleOrder} disabled={products.length === 0} className={classes.orderNowBtn}>Order now</span>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default Cart


