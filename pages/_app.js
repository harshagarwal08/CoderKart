import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')))
        saveCart(cart)
      }
    }
    catch (error) {
      localStorage.clear()
    }
  }, [subTotal])

  const saveCart = (newCart) => {
    let subT = 0;
    let keys = Object.keys(newCart)
    for(let i=0; i<keys.length; i++){
      subT+=newCart[keys[i]].price * newCart[keys[i]].qty
    }
    setSubTotal(subT)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) newCart[itemCode].qty = cart[itemCode].qty + qty;
    else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const removeFromCart = (itemCode) => {
    let newCart = cart;
    console.log(newCart)
    delete newCart[itemCode]
    setCart(newCart)
    saveCart(newCart)
  }


  return <div className='flex-col'>
    <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} subTotal={subTotal} />
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </div>
}

export default MyApp
