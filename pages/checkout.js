import React, { useRef } from 'react'
import Link from 'next/link'
import { GrNext } from 'react-icons/gr'

const Checkout = ({ subTotal }) => {
    const ref = useRef()
    const toggleCouponForm = () => {
        if (ref.current.classList.contains('block')) {
            ref.current.classList.remove('block')
            ref.current.classList.add('hidden')
        }
        else {
            ref.current.classList.remove('hidden')
            ref.current.classList.add('block')
        }
    }
    return (
        <>
            <div className="text-gray-600 mt-10 mb-20">
                <div className="container flex flex-col md:px-32 px-4 py-4 items-center">
                    <div className="flex items-center lg:w-3/5">
                        <Link href={"/cart"}>
                            <a className="w-1/3 py-3 font-medium tracking-wider title-font hover:text-sky-700 text-gray-400 cursor-pointer text-center md:text-xl text-sm">
                                SHOPPING CART
                            </a>
                        </Link>
                        <GrNext className='mx-2' />
                        <Link href={"/checkout"}>
                            <a className="w-1/3 py-3 font-medium tracking-wider text-sky-700 title-font cursor-pointer text-center md:text-xl text-sm">
                                CHECKOUT DETAILS
                            </a>
                        </Link>
                        <GrNext className='mx-2' />
                        <a
                            className="w-1/3 py-3 font-medium  tracking-wider text-gray-400 title-font text-center md:text-xl text-sm cursor-default">
                            ORDER COMPLETE
                        </a>
                    </div>
                    <div className='my-10 flex flex-col w-screen lg:w-3/5'>
                        <div className='text-center lg:text-left text-sm font-semibold text-gray-400 mb-3'>Have a coupon? <a onClick={() => toggleCouponForm()} className='text-gray-500 font-bold cursor-pointer hover:text-gray-900'> Click here to enter your code </a> </div>
                        <form ref={ref} className="hidden border-dashed border-2 border-sky-700 text-center mx-6 lg:mx-0" method="post">
                            <input type="text" name="" placeholder='Coupon Code' id="" className='border-2 border-gray-400 my-5 px-2 py-1 w-5/6 focus:outline-none' />
                            <button type="submit" className='w-5/6 px-2 py-1 mb-5 bg-sky-700 text-white font-bold uppercase'>Apply Coupon</button>
                        </form>
                        <div className='text-left'>
                            <div className='font-bold text-gray-600 my-5 border-t-2 border-slate-300 mx-5 lg:mx-0 text-lg'>
                                <div className='mt-5'>BILLING & SHIPPING</div>
                            </div>
                            <div className='px-4'>
                                <div>
                                <label htmlFor="email" className='font-semibold'>Email address&nbsp;
                                    <abbr title="required" className='text-red-800 border-none no-underline'>*</abbr></label>
                                <input type="email" name="email" id="email" className='border-[1px] border-gray-300 shadow-md focus:border-sky-700 px-[0.75em] rounded-none h-[2.5em] outline-none w-full bg-white text-gray-900 mt-2' autoComplete='email' />
                                </div>
                                <div className='flex lg:flex-row flex-col mt-3 lg:space-x-5 space-y-3 lg:space-y-0 w-full'>
                                    <div className='lg:w-1/2 w-full'>
                                        <label htmlFor="firstname" className='font-semibold'>First name&nbsp;
                                            <abbr title="required" className='text-red-800 border-none no-underline'>*</abbr></label>
                                        <input type="text" name="firstname" id="firstname" className='border-[1px] border-gray-300 shadow-md focus:border-sky-700 px-[0.75em] rounded-none h-[2.5em] outline-none w-full bg-white text-gray-900 mt-2'/>
                                    </div>
                                    <div className='lg:w-1/2 w-full'>
                                        <label htmlFor="lastname" className='font-semibold'>Last name&nbsp;
                                            <abbr title="required" className='text-red-800 border-none no-underline'>*</abbr></label>
                                        <input type="text" name="lastname" id="lastname" className='border-[1px] border-gray-300 shadow-md focus:border-sky-700 px-[0.75em] rounded-none h-[2.5em] outline-none w-full bg-white text-gray-900 mt-2'/>
                                    </div>
                                </div>
                                <div className='w-full mt-4'>
                                        <label htmlFor="address" className='font-semibold'>Street address&nbsp;
                                            <abbr title="required" className='text-red-800 border-none no-underline'>*</abbr></label>
                                        <textarea rows="2" type="text" name="address" id="address" className='border-[1px] border-gray-300 shadow-md focus:border-sky-700 px-[0.75em] rounded-none outline-none w-full bg-white text-gray-900 mt-2 py-2 overflow-y-hidden resize-y' placeholder='House number and Street Name'/>
                                </div>
                                <div className='w-full mt-4'>
                                        <label htmlFor="city" className='font-semibold'>Town / City&nbsp;
                                            <abbr title="required" className='text-red-800 border-none no-underline'>*</abbr></label>
                                        <input type="text" name="city" id="city" className='border-[1px] border-gray-300 shadow-md focus:border-sky-700 px-[0.75em] rounded-none h-[2.5em] outline-none w-full bg-white text-gray-900 mt-2 py-2'/>
                                </div>
                                <div className='w-full mt-4'>
                                        <label htmlFor="state" className='font-semibold'>State&nbsp;
                                            <abbr title="required" className='text-red-800 border-none no-underline'>*</abbr></label>
                                        <input type="text" name="state" id="state" className='border-[1px] border-gray-300 shadow-md focus:border-sky-700 px-[0.75em] rounded-none h-[2.5em] outline-none w-full bg-white text-gray-900 mt-2 py-2'/>
                                </div>
                                <div className='w-full mt-4'>
                                        <label htmlFor="pincode" className='font-semibold'>PIN&nbsp;
                                            <abbr title="required" className='text-red-800 border-none no-underline'>*</abbr></label>
                                        <input type="text" name="pincode" id="pincode" className='border-[1px] border-gray-300 shadow-md focus:border-sky-700 px-[0.75em] rounded-none h-[2.5em] outline-none w-full bg-white text-gray-900 mt-2 py-2'/>
                                </div>
                                <div className='w-full mt-4'>
                                        <label htmlFor="phone" className='font-semibold'>Phone&nbsp;
                                            <abbr title="required" className='text-red-800 border-none no-underline'>*</abbr></label>
                                        <input type="text" name="phone" id="phone" className='border-[1px] border-gray-300 shadow-md focus:border-sky-700 px-[0.75em] rounded-none h-[2.5em] outline-none w-full bg-white text-gray-900 mt-2 py-2'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href={"/order"}>
                    <button className="mx-auto mt-2 text-white bg-sky-700 border-0 py-2 px-8 md:w-1/3 w-1/2 focus:outline-none hover:bg-sky-800 rounded lg:text-lg text-sm font-bold">PLACE ORDER</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Checkout