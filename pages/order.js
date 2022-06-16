import React from 'react'
import { GrNext } from 'react-icons/gr'
import mongoose from 'mongoose'
import Order from '../models/Order'
import Head from 'next/head'

const MyOrder = ({ order}) => {
    const products = order[0].products
    return (
        <>
        <Head>
            <title>Order - CoderKart</title>
        </Head>
            <div className="text-gray-600 mt-10 mb-20 xl:min-h-full min-h-screen">
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
                    {Object.keys(products).length !== 0 &&
                        <section className="text-gray-600 body-font overflow-hidden w-full">
                            <div className="container px-5 py-10 mx-auto">
                                <div className="xl:w-4/5 mx-auto flex xl:flex-row flex-col">
                                    <img alt="ecommerce" className="xl:w-1/2 w-full h-48 lg:h-64 object-cover object-top rounded" src="/order.gif" />
                                    <div className="xl:w-1/2 w-full xl:pl-10 xl:pb-4 mt-6 xl:mt-0">
                                        {/* <h2 className="text-sm title-font text-sky-700 tracking-widest">coderkart.com</h2> */}
                                        <h1 className='text-center text-gray-900 text-xl title-font font-medium mb-2'>Order Summary (<span className='hover:text-sky-900 text-sky-700 cursor-pointer'>#{order[0].orderId}</span>)</h1>
                                        <div className="flex my-4">
                                            <a className="flex-grow py-2 text-lg px-5 font-semibold text-gray-700">Product</a>
                                            <a className="py-2 text-lg px-1 font-semibold text-gray-700">Subtotal</a>
                                        </div>
                                        {Object.keys(products).map((item) => {
                                            return <div className="flex border-t border-gray-200 py-2 justify-between items-center" key={item}>
                                                <div className='flex flex-row items-center'>
                                                    <img src={products[item].img} alt="" className="w-[60px] h-[60px] mt-2 mr-2" />
                                                    <span className='word-break'>{products[item].name} - {products[item].size}, {products[item].variant}
                                                        <div className="text-left text-gray-400 text-sm">{products[item].qty} x
                                                            <span className="text-sm font-bold text-gray-600"> ₹{products[item].price}</span>
                                                        </div>
                                                    </span>
                                                </div>
                                                <span className="text-gray-900 pl-5 font-semibold">₹{products[item].qty * products[item].price}</span>
                                            </div>
                                        })}
                                        <div className="flex mt-10 justify-between items-center">
                                            <span className="title-font font-medium text-xl text-gray-900">Total: ₹{order[0].amount}</span>
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
export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
    }
    let order = await Order.find({ orderId: context.query.id })
    return {
        props: {order: JSON.parse(JSON.stringify(order))}
    }
}
export default MyOrder