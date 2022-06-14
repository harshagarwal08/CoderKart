import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
            <footer className="text-gray-600 body-font mt-auto">
                <div className="container px-5 pt-10 pb-2 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col bg-gray-100 max-w-screen-2xl">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <Link href={"/"}>
                            <a className="flex title-font font-medium items-center justify-center text-gray-900">
                                <Image src="/logo.png" height={45} width={200} alt="" />
                            </a>
                        </Link>
                        <p className="mt-2 text-sm text-gray-500 px-10">Coding related apparels and accessories for all the geeks out there.</p>
                    </div>
                    <div className="flex-grow flex-wrap flex md:pl-24 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SHOP</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={"/tshirts"}>
                                    <a className="text-gray-600 hover:text-gray-800">Tshirts</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/hoodies"}>
                                    <a className="text-gray-600 hover:text-gray-800">Hoodies</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/mugs"}>
                                    <a className="text-gray-600 hover:text-gray-800">Mugs</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/stickers"}>
                                    <a className="text-gray-600 hover:text-gray-800">Stickers</a>
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CUSTOMER SERVICE</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">About Us</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Return Policy</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">POLICY</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Terms and Conditions</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 flex items-center justify-center md:w-1/2 w-full px-4">
                            <nav className='list-none mb-10 w-60'>
                        <img src={'/razorpay.jpg'} alt=""/>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 coderkart —
                            <a href="https://instagram.com/defnotharsh" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@harshagarwal</a>
                        </p>
                    </div>
                </div>
            </footer>
    )
}

export default Footer