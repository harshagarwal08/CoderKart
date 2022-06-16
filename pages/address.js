import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

const Address = () => {
    const router = useRouter();
    const [name, setName] = useState('')
    const [street, setStreet] = useState('')
    const [pincode, setPincode] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const fetchData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        });
        const data = await response.json();
        console.log(data);
        setName(data?.address?.name);
        setStreet(data?.address?.street);
        setPincode(data?.address?.pincode);
        setCity(data?.address?.city);
        setState(data?.address?.state);
        setPhone(data?.address?.phone);
    }
    useEffect(() => {
        const myUser = JSON.parse(localStorage.getItem('myUser'));
        if(!myUser){
            window.location = `${process.env.NEXT_PUBLIC_HOST}`
        }
        if (myUser && myUser.email) {
            setEmail(myUser.email);
        }
        if(email){
            fetchData();
        }
    }, [email])
    const handleUserSubmit = async() => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateAddress`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, name: name, pincode: pincode, city: city, state: state, phone: phone, street: street})
        });
        const data = await response.json();
        if(data.success == true){
            toast.success('Your address is updated.', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        if(data.success == false){
            toast.error(data.error, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <>
        <Head>
            <title>Saved Address - CoderKart
                </title>
                </Head>
        <section className="text-gray-600 body-font relative">
             <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            <div className="container px-5 py-10 mx-auto">
                <div className="lg:w-1/3 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-full">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" value={name} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-700 focus:bg-white focus:ring-2 focus:ring-sky-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="p-2 w-full">
                            <label htmlFor="street" className="leading-7 text-sm text-gray-600">Street Address</label>
                            <textarea id="street" name="street" value={street} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setStreet(e.target.value)} />
                        </div>
                        <div className="p-2 w-full">
                            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                            <input type="text" id="pincode" name="pincode" value={pincode} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-700 focus:bg-white focus:ring-2 focus:ring-sky-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setPincode(e.target.value)} />
                        </div>
                        <div className='flex flex-row'>
                            <div className="p-2 w-1/2">
                                <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                                <input type="text" id="city" name="city" value={city} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-700 focus:bg-white focus:ring-2 focus:ring-sky-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <div className="p-2 w-1/2">
                                <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                                <input type="text" id="state" name="state" value={state} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-700 focus:bg-white focus:ring-2 focus:ring-sky-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setState(e.target.value)} />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                            <input type="text" id="phone" name="phone" value={phone} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-700 focus:bg-white focus:ring-2 focus:ring-sky-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        </div>
                        <div className="p-2 mt-4 w-full">
                            <button className="flex mx-auto text-white bg-sky-700 border-0 py-2 px-8 focus:outline-none hover:bg-sky-700 rounded text-lg" onClick={() => handleUserSubmit()}>Update Address</button>
                        </div>
                    </div>
                </div>
        </section>
        </>
)
}

export default Address