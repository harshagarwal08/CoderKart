import React from 'react'
import mongoose from 'mongoose'
import Order from '../models/Order'

const orderDetails = ({ order }) => {
    const products = order[0].products
    return (
        <>
            {Object.keys(products).length !== 0 &&
                <section className="text-gray-600 body-font overflow-hidden w-full my-10">
                    <div className="container px-5 py-10 mx-auto">
                        <div className="xl:w-1/2 xl:pl-10 xl:pb-4 mt-6 xl:mt-0 mx-auto">
                            {/* <h2 className="text-sm title-font text-sky-700 tracking-widest">coderkart.com</h2> */}
                            <h1 className='text-center text-gray-900 text-xl title-font font-medium mb-2'>Order Details (<span className='hover:text-sky-900 text-sky-700 cursor-pointer'>#{order[0].orderId}</span>)</h1>
                            <h2 className='text-center'>Order placed on {(new Date(order[0].createdAt)).toLocaleDateString()}</h2>
                            <div className="flex my-4">
                                <a className="flex-grow py-2 text-lg px-5 font-semibold text-gray-700">Product</a>
                                <a className="py-2 text-lg px-1 font-semibold text-gray-700">Subtotal</a>
                            </div>
                            {Object.keys(products).map((item) => {
                                return <div className="flex border-t border-gray-200 py-2 justify-between items-center" key={item}>
                                    <div className='flex flex-row items-center'>
                                        <img src={products[item].img} alt="" className="w-[60px] h-[60px] mt-2 mr-1" />
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
                </section>
            }
        </>
    )
}
export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
    }
    let order = await Order.find({ orderId: context.query.id })
    return {
        props: { order: JSON.parse(JSON.stringify(order)) }
    }
}
export default orderDetails