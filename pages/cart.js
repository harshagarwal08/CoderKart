import React from 'react'
import Link from 'next/link'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { GrNext } from 'react-icons/gr'

const Cart = ({ cart, removeFromCart, subTotal }) => {
    let disableB = Object.keys(cart).length ? 'checkout' : 'cart';
    return (
        <>
            <div className="text-gray-600 mt-10 mb-20">
                <div className="container flex flex-col md:px-32 px-4 py-4 items-center">
                    <div className="flex items-center lg:w-3/5">
                        <Link href={"/cart"}>
                            <a className="w-1/3 py-3 font-medium tracking-wider text-sky-700 title-font cursor-pointer text-center md:text-xl text-sm">
                                SHOPPING CART
                            </a>
                        </Link>
                        <GrNext className='mx-2' />
                        {}
                        <Link href={`/${disableB}`}>
                            <a className={`
                        w-1/3 py-3 font-medium tracking-wider title-font ${disableB==='checkout'?'hover:text-sky-700 cursor-pointer':'cursor-default'} text-gray-400 text-center md:text-xl text-sm`}>
                                CHECKOUT DETAILS
                            </a>
                        </Link>
                        <GrNext className='mx-2' />
                        <a
                            className="w-1/3 py-3 font-medium cursor-default tracking-wider text-gray-400 title-font text-center md:text-xl text-sm">
                            ORDER COMPLETE
                        </a>
                    </div>
                    {Object.keys(cart).length === 0 ? <div className='text-center my-16 font-semibold text-gray-500'>No products in the cart.</div> :
                        <div className='text-center my-10'>
                            <table className='w-full border-gray-300' cellSpacing={0}>
                                <thead>
                                    <tr>
                                        <th className="p-[0.5em] text-left border-b-2 border-gray-300 text-gray-500" colSpan={3}>PRODUCT</th>
                                        <th className="p-[0.5em] text-left border-b-2 border-gray-300 text-gray-500 lg:table-cell hidden">PRICE</th>
                                        <th className="p-[0.5em] text-left border-b-2 border-gray-300 text-gray-500 lg:table-cell hidden">QUANTITY</th>
                                        <th className="p-[0.5em] text-left border-b-2 border-gray-300 text-gray-500 table-cell">SUBTOTAL</th>
                                    </tr>
                                </thead>
                                {Object.keys(cart).map((k) => {
                                    return <tbody key={k}>
                                        <tr>
                                            <td className='py-4'>
                                                <AiOutlineCloseCircle onClick={() => removeFromCart(k)} className='text-gray-300 text-2xl hover:text-gray-800 table-cell mr-2' />
                                            </td>
                                            <td className='table-cell'>
                                                <img src={cart[k].img} alt="" className="hidden md:block w-[60px] h-[80px] mt-2" />
                                            </td>
                                            <td className='text-left pl-2 font-bold text-gray-600 break-words w-52 table-cell'>
                                                {cart[k].name} - {cart[k].size}, {cart[k].variant}
                                                <div className="text-left text-gray-400 text-sm block lg:hidden">{cart[k].qty} x
                                                    <span className="text-sm font-bold text-gray-600"> ₹{cart[k].price}</span></div>
                                            </td>
                                            <td className='mt-2 font-bold text-gray-600 lg:table-cell hidden'>₹{cart[k].price}</td>
                                            <td className='mt-4 font-bold text-gray-600 lg:table-cell hidden'> {cart[k].qty}
                                            </td>
                                            <td className='mt-2 font-bold text-gray-600 table-cell'>
                                                ₹{cart[k].qty*cart[k].price}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3} className='text-right border-0 pt-4 pb-3'></td>
                                        </tr>
                                    </tbody>
                                })}
                            </table>
                        </div>}
                        <Link href={`/${disableB==='cart'?'':'checkout'}`}>
                    <button className={`mx-auto mt-2 text-white bg-sky-700 border-0 py-2 px-8 md:w-1/3 w-1/2 focus:outline-none hover:bg-sky-800 rounded lg:text-lg text-sm font-bold`}>{disableB==='checkout'?'PROCEED TO CHECKOUT':'START SHOPPING'}</button>
                        </Link>
                </div>
            </div>
        </>)
}

export default Cart