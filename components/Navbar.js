import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { VscChromeClose } from 'react-icons/vsc'
import { ImBin } from 'react-icons/im'

const Navbar = ({ logout, user, cart, addToCart, removeFromCart, subTotal }) => {
    const [dropdown, setDropdown] = useState(false)
    const closeCart = () => {
        ref.current?.classList.remove('translate-x-0')
        ref.current?.classList.add('translate-x-full')
    }
    const toggleCart = () => {
        if (ref.current?.classList.contains('translate-x-full')) {
            ref.current?.classList.remove('translate-x-full')
            ref.current?.classList.add('translate-x-0')
        }
        else {
            ref.current?.classList.remove('translate-x-0')
            ref.current?.classList.add('translate-x-full')
        }
    }
    const ref = useRef();
    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-start shadow-md py-2 sticky top-0 z-10 bg-white">
            <div className="logo md:mr-8 mr-auto ml-4 mb-1 md:mb-0 md:text-center text-left">
                <Link href={"/"}><a>
                    <Image src="/logo.png" alt="" width={200} height={45} /></a>
                </Link>
            </div>
            <div className="nav">
                <ul className="flex items-center space-x-3 font-bold">
                    <Link href={"/tshirts"}><a className="hover:text-sky-700"><li>Tshirts</li></a></Link>
                    <Link href={"/hoodies"}><a className="hover:text-sky-700"><li>Hoodies</li></a></Link>
                    <Link href={"/mugs"}><a className="hover:text-sky-700"><li>Mugs</li></a></Link>
                    <Link href={"/stickers"}><a className="hover:text-sky-700"> <li>Stickers</li></a></Link>
                </ul>
            </div>
            <div className={`cart absolute right-0 ${user.value? 'top-5': 'top-4'} mx-5 cursor-pointer flex space-x-3 items-center`}>
                <span onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                    {dropdown && <div onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} className="absolute right-9 bg-white shadow-md border top-6 rounded-md px-5 w-32">
                        <ul className=''>
                            <Link href={'/account'}><a><li className="py-1 pt-2 hover:text-sky-700 font-medium">Account</li></a></Link>
                            <Link href={'/orders'}><a><li className="py-1 hover:text-sky-700 font-medium">Orders</li></a></Link>
                            <li onClick={logout} className="py-1 hover:text-sky-700 font-medium pb-2">Logout</li>
                        </ul>
                    </div>}
                    {user.value && <AiOutlineUser className='md:text-2xl text-lg hover:text-sky-700' />}
                </span>
                {!user.value &&
                    <Link href={"/login"}>
                        <button className='bg-sky-700 text-white p-2 rounded-md text-sm'>Login</button>
                    </Link>
                }
                <span className="relative inline-block" onClick={toggleCart}>
                    <AiOutlineShoppingCart className="text-xl md:text-2xl hover:text-sky-700" />
                    {Object.keys(cart)?.length !== 0 &&
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-sky-700 rounded-full">{Object.keys(cart)?.length}</span>}
                </span>
            </div>
            <div ref={ref} className="sidecart absolute top-0 right-0 bg-gray-100 py-6 px-8 w-[360px] transition-transform translate-x-full z-20 h-[100vh]">
                <h3 className="font-bold text-md text-gray-600 text-center">CART</h3>
                <div className="h-[2px] bg-gray-300 my-3 w-100 max-w-[30px] mx-auto text-center"></div>
                <span onClick={toggleCart} className="absolute top-2 right-2 text-xl text-gray-600 hover:text-black">
                    <VscChromeClose cursor="pointer" />
                </span>
                <div>
                    <ul className="overflow-y-auto">
                        {Object.keys(cart)?.length === 0 && <div className='text-center my-4 font-semibold text-gray-500'>No products in the cart.</div>}
                        {Object.keys(cart)?.map((k) => {
                            return <li key={k} className="pt-3 pb-5 pl-2 pr-2 relative">
                                <span onClick={() => removeFromCart(k)} className="absolute right-0 z-10">
                                    <ImBin className="text-gray-400 hover:text-black" />
                                </span>
                                <Link href={`/product/${k}`}>
                                    <a href="" className="flex">
                                        <img src={cart[k].img} alt="" className="w-[60px] h-[60px] object-contain" />
                                        <span className="word-wrap max-w-[250px] ml-2 md:mr-0 mr-1">
                                            {cart[k].name} - {cart[k].variant}, {cart[k].size} </span>
                                    </a>
                                </Link>
                                <div className="text-right text-gray-400 text-xs">{cart[k].qty} x
                                    <span className="text-sm font-bold text-gray-700"> ₹{cart[k].price}</span></div>
                            </li>
                        })}
                    </ul>
                    {(Object.keys(cart)?.length > 0) &&
                        <div>
                            <div className="text-center py-3 border-y-2 mt-5">
                                <strong className="text-gray-500"> Subtotal: </strong><span className="text-gray-700 font-bold">₹{subTotal}</span>
                            </div>
                            <div className="text-center mb-8">
                                <Link href={"/cart"} onClick={closeCart()}>
                                    <button className="mt-6 text-white bg-sky-700 border-0 py-2 px-8 w-3/4 focus:outline-none hover:bg-sky-800	 rounded text-lg">View Cart</button>
                                </Link>
                                <Link href={"/checkout"} onClick={closeCart()}>
                                    <button className="mt-2 text-white bg-orange-700 border-0 py-2 px-8 w-3/4 focus:outline-none hover:bg-orange-800 rounded text-lg">Checkout</button>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar