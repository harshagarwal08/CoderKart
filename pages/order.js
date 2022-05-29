import React from 'react'
import Link from 'next/link'
import { GrNext } from 'react-icons/gr'

const Order = ({ cart, subTotal }) => {
    return (
        <>
            <div className="text-gray-600 mt-10 mb-20">
                <div className="container flex flex-col md:px-32 px-4 py-4 items-center">
                    <div className="flex items-center lg:w-3/5">
                        <a className="w-1/3 py-3 font-medium tracking-wider text-gray-400 title-font cursor-default text-center md:text-xl text-sm">
                            SHOPPING CART
                        </a>
                        <GrNext className='mx-2' />
                        <a className="
                        w-1/3 py-3 font-medium tracking-wider title-font text-gray-400 cursor-default text-center md:text-xl text-sm">
                            CHECKOUT DETAILS
                        </a>
                        <GrNext className='mx-2' />
                        <a
                            className="w-1/3 py-3 font-medium cursor-default  tracking-wider text-sky-700 title-font text-center md:text-xl text-sm">
                            ORDER COMPLETE
                        </a>
                    </div>
                {Object.keys(cart).length!==0 &&
                    <section className="text-gray-600 body-font overflow-hidden w-full">
                        <div className="container px-5 py-16 mx-auto">
                            <div className="xl:w-4/5 mx-auto flex xl:flex-row flex-col">
                                <img alt="ecommerce" className="xl:w-1/2 w-full xl:mt-5 h-96 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                                <div className="xl:w-1/2 w-full xl:pl-10 xl:pb-4 mt-6 xl:mt-0">
                                    {/* <h2 className="text-sm title-font text-sky-700 tracking-widest">coderkart.com</h2> */}
                                    <h1 className='text-center text-gray-900 text-xl title-font font-medium mb-2'>Order Summary (<span className='hover:text-sky-900 text-sky-700 cursor-pointer'>#33377</span>)</h1>
                                    <div className="flex my-4">
                                        <a className="flex-grow py-2 text-lg px-5 font-semibold text-gray-700">Product</a>
                                        <a className="py-2 text-lg px-1 font-semibold text-gray-700">Subtotal</a>
                                    </div>
                                    {Object.keys(cart).map((k) => {
                                        return <div className="flex border-t border-gray-200 py-2 justify-between items-center" key={k}>
                                            <div className='flex flex-row items-center'>
                                                <img src="https://m.media-amazon.com/images/I/51sNJt1dcwL._UL1500_.jpg" alt="" className="w-[80px] h-[60px] mt-2" />
                                                <span className='word-break'>{cart[k].name} - {cart[k].size}, {cart[k].variant}
                                                    <div className="text-left text-gray-400 text-sm">{cart[k].qty} x
                                                        <span className="text-sm font-bold text-gray-600"> ₹{cart[k].price}</span>
                                                    </div>
                                                </span>
                                            </div>
                                            <span className="text-gray-900 pl-5 font-semibold">₹{cart[k].qty*cart[k].price}</span>
                                        </div>
                                    })}
                                    <div className="flex mt-10 justify-between items-center">
                                        <span className="title-font font-medium text-xl text-gray-900">Total: ₹{subTotal}</span>
                                        <button className="text-white bg-sky-700 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded">Track Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    }
                </div>
            </div>
        </>
    )
}

export default Order