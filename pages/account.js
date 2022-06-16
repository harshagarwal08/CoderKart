import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import {AiOutlineRight} from 'react-icons/ai'
import Link from 'next/link'
import Head from 'next/head'

const Account = () => {
  const router = useRouter()
  useEffect(() => {
    if (!localStorage.getItem('myUser')) {
        window.location = `${process.env.NEXT_PUBLIC_HOST}`
    }
  })

  return (
    <>
     <Head>
      <title>About Us - CoderKart</title>
    </Head>
    <section className="text-gray-600 body-font min-h-screen">
      <div className="container px-5 py-16 pb-10 mx-auto max-w-3xl">
        <div className="w-full mb-6 lg:text-left text-center">
          <h1 className="text-3xl font-medium title-font text-gray-900">My Account</h1>
          <div className='border-b-4 border-sky-700 mt-3 rounded w-[100px] mx-auto lg:mx-0'></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center max-w-3xl mx-auto">
        <div className="p-4 lg:w-1/2 w-2/3">
          <div className="flex rounded-lg h-full bg-slate-50 lg:p-8 p-10 flex-col">
            <div className="flex items-center mb-2">
              <div className="flex justify-between w-full">
                <h2 className="text-gray-900 text-xl title-font font-medium">My Orders</h2>
                <Link href={"/orders"}><a className=" text-sky-700 inline-flex items-center">
                <span><AiOutlineRight className='text-lg'/></span>
                </a></Link>
              </div>
            </div>
            <p className="leading-relaxed text-gray-500 text-sm">View, modify and track orders</p>
          </div>
        </div>
        <div className="p-4 lg:w-1/2 w-2/3">
          <div className="flex rounded-lg h-full bg-slate-50 lg:p-8 p-10 flex-col">
            <div className="flex items-center mb-2">
              <div className="flex justify-between w-full">
                <h2 className="text-gray-900 text-xl title-font font-medium">My Profile</h2>
                <Link href={"/profile"}>
                <a className=" text-sky-700 inline-flex items-center">
                  <span><AiOutlineRight className='text-lg'/></span>
                </a>
                </Link>
              </div>
            </div>
            <p className="leading-relaxed text-gray-500 text-sm">Edit personal info, change password</p>
          </div>
        </div>
        <div className="p-4 lg:w-1/2 w-2/3">
          <div className="flex rounded-lg h-full bg-slate-50 lg:p-8 p-10 flex-col">
            <div className="flex items-center mb-2">
              <div className="flex justify-between w-full">
                <h2 className="text-gray-900 text-xl title-font font-medium">My Address</h2>
                <Link href={"/address"}>  
                <a className=" text-sky-700 inline-flex items-center">
                <span><AiOutlineRight className='text-lg'/></span>
                </a>
                </Link>
              </div>
            </div>
            <p className="leading-relaxed text-gray-500 text-sm">Edit your default address</p>
          </div>
        </div>
        <div className="p-4 lg:w-1/2 w-2/3">
          <div className="flex rounded-lg h-full bg-slate-50 lg:p-8 p-10 flex-col">
            <div className="flex items-center mb-2">
              <div className="flex justify-between w-full">
                <h2 className="text-gray-900 text-xl title-font font-medium">Refer and Earn</h2>
                <Link href={"/refer"}><a className=" text-sky-700 inline-flex items-center">
                <span><AiOutlineRight className='text-lg'/></span>
                </a></Link>
              </div>
            </div>
            <p className="leading-relaxed text-gray-500 text-sm">Invite your friends and earn rewards</p>
          </div>
        </div>
      </div>
    </section >
    </>
    )
}

export default Account