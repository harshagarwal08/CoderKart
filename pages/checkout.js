import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { GrNext } from 'react-icons/gr'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head'

const Checkout = ({ clearCart, cart, subTotal }) => {
    const router = useRouter()
    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [pincode, setPincode] = useState('')
    const [address, setAddress] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [user, setUser] = useState({ value: null })
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('myUser'))
        // if(subTotal==0)router.push('/');
        if (user) {
            setUser(JSON.parse(localStorage.getItem('myUser')))
            setEmail(user.email)
            fetchData();
        }
    }, [email])
    const fetchData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        });
        const data = await response.json();
        setFName(data?.address?.name.split(' ')[0]);
        setLName(data?.address?.name.split(' ')[1])
        setAddress(data?.address?.street);
        setPincode(data?.address?.pincode);
        setCity(data?.address?.city);
        setState(data?.address?.state);
        setPhone(data?.address?.phone);
    }
    const getPinCityState = async (e) => {
        if (e.target.name == 'pincode') setPincode(e.target.value);
        if (e.target.value.length == 6 && e.target.name == 'pincode') {
            let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
            let pinJson = await pins.json()
            if (Object.keys(pinJson).includes(e.target.value)) {
                setCity(pinJson[e.target.value][0]);
                setState(pinJson[e.target.value][1])
            }
            else {
                if (e.target.name == 'city') setCity(e.target.value)
                else if (e.target.name == 'state') setState(e.target.value)
            }
        }
        else {
            if (e.target.name == 'city') setCity(e.target.value)
            else if (e.target.name == 'state') setState(e.target.value)
        }
    }
    // if (fname && lname && email && phone && pincode && address) setDisabled(true)

    const initiatePayment = async () => {
        const script = document.createElement('script')
        script.src = 'https://checkout.razorpay.com/v1/checkout.js'
        script.onerror = () => {
            alert('Razorpay failed to load. Are you online?')
        }
        script.onload = async () => {
            try {
                const result = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/createOrder`, {
                    method: 'POST',
                    body: JSON.stringify({ amount: subTotal * 100, street: address, email: email, cart: cart, subTotal, pincode: pincode, phone: phone, fname: fname, lname: lname, city: city, state: state}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await result.json();
                if (data.success === true) {
                    const { amount, id: order_id, currency } = data.order;
                    const options = {
                        key: process.env.NEXT_PUBLIC_KEY,
                        amount: amount.toString(),
                        currency: currency,
                        name: `CoderKart`,
                        order_id: order_id,
                        handler: async function (response) {
                            const result = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/verifyPayment`, {
                                method: 'POST',
                                body: JSON.stringify({ response, order_id: order_id }),
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            });
                            const data = await result.json();
                            if (data.signatureIsValid) {
                                setTimeout(() => {
                                    router.replace(`/order?id=${order_id}`);
                                    clearCart();
                                }, 500);
                            }
                        },
                        prefill: {
                            name: `${fname} ${lname}`,
                            email: email,
                            contact: phone,
                        },
                        theme: {
                            color: '#1976d2'
                        }
                    }
                    const paymentObject = new window.Razorpay(options);
                    paymentObject.open()
                    paymentObject.on('payment.failed', (response) => {
                        toast.error('Payment Failed! Please try again.', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    })
                }
                else if (data.success === false) {
                    toast.error(data.error, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    if (data.reload) {
                        setTimeout(() => {
                            router.push('/');
                            clearCart();
                        }, 3200);
                    }
                }
            }
            catch (err) {
                console.log(err)
                toast.error('Payment Failed! Please try again.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
        document.body.appendChild(script)
    }
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
        <Head>
            <title>Checkout - CoderKart</title>
        </Head>
            <div className="text-gray-600 mt-10 mb-20">
                <ToastContainer
                    position="top-center"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
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
                                    {user.token ?
                                        <input type="email" name="email" id="email" className='border-[1px] border-gray-300 shadow-md focus:border-sky-700 px-[0.75em] rounded-none h-[2.5em] outline-none w-full bg-white text-gray-900 mt-2' autoComplete='email' value={user.email} readOnly={true} /> : <input type="email" name="email" id="email" className='border-[1px] border-gray-300 shadow-md focus:border-sky-700 px-[0.75em] rounded-none h-[2.5em] outline-none w-full bg-white text-gray-900 mt-2' autoComplete='email' onChange={(e) => setEmail(e.target.value)} value={email} required={true} />
                                    }
                                </div>
                                <div className='flex lg:flex-row flex-col mt-3 lg:space-x-5 space-y-3 lg:space-y-0 w-full'>
                                    <div className='lg:w-1/2 w-full'>
                                        <label htmlFor="firstname" className='font-semibold'>First name&nbsp;
                                            <abbr title="required" className='text-red-800 border-none no-underline'>*</abbr></label>
                                        <input type="text"
                                            name="fname" id="firstname" className='border-[1px] border-gray-300 shadow-md focus:border-sky-700 px-[0.75em] rounded-none h-[2.5em] outline-none w-full bg-white text-gray-900 mt-2' onChange={(e) => setFName(e.target.value)} value={fname} required={true} />
                                    </div>
                                    <div className='lg:w-1/2 w-full'>
                                        <label htmlFor="lastname" className='font-semibold'>Last name&nbsp;
                                            <abbr title="required" className='text-red-800 border-none no-underline'>*</abbr></label>
                                        <input type="text" name="lname" id="lastname" className='border-[1px] border-gray-300 shadow-md focus:border-sky-700 px-[0.75em] rounded-none h-[2.5em] outline-none w-full bg-white text-gray-900 mt-2' onChange={(e) => setLName(e.target.value)} value={lname} required={true} />
                                    </div>
                                </div>
                                <div className='w-full mt-4'>
                                    <label htmlFor="address" className='font-semibold'>Street address&nbsp;
                                        <abbr title="required" className='text-red-800 border-none no-underline'>*</abbr></label>
                                    <textarea rows="2" type="text" name="address" id="address" className='border-[1px] border-gray-300 shadow-md focus:border-sky-700 px-[0.75em] rounded-none outline-none w-full bg-white text-gray-900 mt-2 py-2 overflow-y-hidden resize-y' placeholder='House number and Street Name' onChange={(e) => setAddress(e.target.value)} value={address} required={true} />
                                </div>
                                <div className='w-full mt-4'>
                                    <label htmlFor="pincode" className='font-semibold'>PIN&nbsp;
                                        <abbr title="required" className='text-red-800 border-none no-underline'>*</abbr></label>
                                    <input type="text" name="pincode" id="pincode" className='border-[1px] border-gray-300 shadow-md focus:border-sky-700 px-[0.75em] rounded-none h-[2.5em] outline-none w-full bg-white text-gray-900 mt-2 py-2'
                                        onChange={(e) => getPinCityState(e)} value={pincode} required={true} />
                                </div>
                                <div className='w-full mt-4'>
                                    <label htmlFor="city" className='font-semibold'>Town / City&nbsp;
                                        <abbr title="required" className='text-red-800 border-none no-underline'>*</abbr></label>
                                    <input type="text" value={city} name="city" id="city" className='border-[1px] border-gray-300 shadow-md focus:border-sky-700 px-[0.75em] rounded-none h-[2.5em] outline-none w-full bg-white text-gray-900 mt-2 py-2' onChange={(e) => getPinCityState(e)} required={true} />
                                </div>
                                <div className='w-full mt-4'>
                                    <label htmlFor="state" className='font-semibold'>State&nbsp;
                                        <abbr title="required" className='text-red-800 border-none no-underline'>*</abbr></label>
                                    <input type="text" name="state" value={state} id="state" className='border-[1px] border-gray-300 shadow-md focus:border-sky-700 px-[0.75em] rounded-none h-[2.5em] outline-none w-full bg-white text-gray-900 mt-2 py-2' onChange={(e) => getPinCityState(e)} required={true} />
                                </div>
                                <div className='w-full mt-4'>
                                    <label htmlFor="phone" className='font-semibold'>Phone&nbsp;
                                        <abbr title="required" className='text-red-800 border-none no-underline'>*</abbr></label>
                                    <input type="text" name="phone" id="phone" className='border-[1px] border-gray-300 shadow-md focus:border-sky-700 px-[0.75em] rounded-none h-[2.5em] outline-none w-full bg-white text-gray-900 mt-2 py-2' onChange={(e) => setPhone(e.target.value)} value={phone} required={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button disabled={disabled} onClick={initiatePayment} className="mx-auto mt-2 text-white bg-sky-700 border-0 py-2 px-8 md:w-1/3 w-1/2 focus:outline-none hover:bg-sky-800 rounded lg:text-lg text-sm font-bold disabled:bg-sky-200">PAY ???{subTotal}</button>
                </div>
            </div>
        </>
    )
}

export default Checkout
