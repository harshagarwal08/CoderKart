import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useRouter} from 'next/router'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')))
        setSubTotal(localStorage.getItem('cart-subT'))
  }, [subTotal])

  const saveCart = (newCart) => {
    let subT = 0;
    let keys = Object.keys(newCart);
    for(let i=0; i<keys.length; i++){
      subT+=newCart[keys[i]].price * newCart[keys[i]].qty
    }
    setSubTotal(subT)
    localStorage.setItem('cart', JSON.stringify(newCart))
    localStorage.setItem('cart-subT', subT);
  }
  const buyNow = (itemCode, qty, price, name, size, variant, img) => {
    let newCart = {itemCode: {qty:1, price, name, size, variant, img}}
    setCart(newCart)
    saveCart(newCart)
    router.push('/checkout')
  }

  const addToCart = (itemCode, qty, price, name, size, variant, img) => {
    let newCart = cart;
    if (itemCode in cart) newCart[itemCode].qty = cart[itemCode].qty + qty;
    else {
      newCart[itemCode] = {qty: 1, price, name, size, variant, img}
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const removeFromCart = (itemCode) => {
    let newCart = cart;
    delete newCart[itemCode]
    setCart(newCart)
    saveCart(newCart)
  }


  return <div className='flex flex-col min-h-[100vh]'>
    <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} subTotal={subTotal} />
    <Component cart={cart} addToCart={addToCart} buyNow={buyNow} removeFromCart={removeFromCart} subTotal={subTotal} {...pageProps} />
    <Footer/>
  </div>
}

export default MyApp
