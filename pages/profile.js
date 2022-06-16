import React, { useState, useEffect} from 'react'
import {useRouter} from 'next/router'
const jwt = require('jsonwebtoken');
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [newpassword, setNewPassword] = useState('')
    const [cnewpassword, setCNewPassword] = useState('')
    const [user, setUser] = useState({})
    const router = useRouter()
    useEffect(() => {
        const myUser = JSON.parse(localStorage.getItem('myUser'));
        if(!myUser){
            window.location = `${process.env.NEXT_PUBLIC_HOST}`
        }
        if(myUser && myUser.token){
            setUser(myUser);
            setEmail(myUser.email);
            var data = jwt.decode(myUser.token,{complete: true, json: true});
            setName(data.payload.name);
        }
    }, [])
    const handleUserSubmit = async() => {
        let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateProfile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: email, password: password, newPassword: newpassword, cnewPassword: cnewpassword})
        });
        const data = await response.json();
        if(data.success == true){
            toast.success('Your profile is updated.', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(()=>{
                router.push('/account');
            }, 2000);
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
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-4">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Your Profile</h1>
                </div>
                <div className="lg:w-1/3 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-full">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" value={name} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-700 focus:bg-white focus:ring-2 focus:ring-sky-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="p-2 w-full">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" defaultValue={email} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true}/>
                        </div>
                        <div className="p-2 w-full">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Current Password</label>
                            <input type="password" value={password} id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-700 focus:bg-white focus:ring-2 focus:ring-sky-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <div className="w-full flex flex-row">
                            <div className="p-2 w-1/2">
                            <label htmlFor="npassword" className="leading-7 text-sm text-gray-600">New Password</label>
                            <input type="password" value={newpassword} id="npassword" name="npassword" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-700 focus:bg-white focus:ring-2 focus:ring-sky-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>setNewPassword(e.target.value)} />
                            </div>
                            <div className="p-2 w-1/2">
                            <label htmlFor="cpassword" className="leading-7 text-sm text-gray-600">Confirm New Password</label>
                            <input type="password" value={cnewpassword} id="cpassword" name="cpassword" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-700 focus:bg-white focus:ring-2 focus:ring-sky-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>setCNewPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="p-2 mt-4 w-full">
                            <button className="flex mx-auto text-white bg-sky-700 border-0 py-2 px-8 focus:outline-none hover:bg-sky-700 rounded text-lg" onClick={()=>handleUserSubmit()}>Update Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default Profile