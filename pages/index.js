import Head from 'next/head'
import Link from 'next/link'
import { FaTshirt, FaShippingFast } from 'react-icons/fa'
import { MdLocalOffer } from 'react-icons/md'

export default function Home() {
    return (
        <div>
            <Head>
                <title>CoderKart - Coding Apparels and Accessories</title>
                <meta name="description" content="CoderKart.in - Wear the code" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div>
                <img src="/home.jpg" alt="" className='md:h-auto h-[200px] max-w-screen-2xl' />
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-wrap w-full flex-col text-left">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-8 text-sky-700 ml-10">Our Latest Collection</h1>
                            <div className="flex flex-wrap justify-center w-full">
                                <Link href={`/product/`}>
                                        <div className="xl:w-1/5 md:w-1/3 sm:w-1/2 w-full p-0 cursor-pointer shadow-xl m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                                            <a className="block relative rounded overflow-hidden">
                                                <img alt="ecommerce" className="block h-[40vh] md:m-0 m-auto object-contain" src={""} />
                                            </a>
                                            <div className="m-2 flex flex-col text-center space-y-2 place-items-center justify-between">
                                                <h2 className="text-gray-700 text-sm font-semibold flex-grow"></h2>
                                                <p className="font-bold mb-2"><s className='text-gray-400 font-semibold mr-1'>₹699</s>₹499</p>
                                            </div>
                                        </div>
                                </Link>
                                <Link href={`/product/`}>
                                        <div className="xl:w-1/5 md:w-1/3 sm:w-1/2 w-full p-0 cursor-pointer shadow-xl m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                                            <a className="block relative rounded overflow-hidden">
                                                <img alt="ecommerce" className="block h-[40vh] md:m-0 m-auto object-contain" src={""} />
                                            </a>
                                            <div className="m-2 flex flex-col text-center space-y-2 place-items-center justify-between">
                                                <h2 className="text-gray-700 text-sm font-semibold flex-grow"></h2>
                                                <p className="font-bold mb-2"><s className='text-gray-400 font-semibold mr-1'>₹699</s>₹499</p>
                                            </div>
                                        </div>
                                </Link>
                                <Link href={`/product/`}>
                                        <div className="xl:w-1/5 md:w-1/3 sm:w-1/2 w-full p-0 cursor-pointer shadow-xl m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                                            <a className="block relative rounded overflow-hidden">
                                                <img alt="ecommerce" className="block h-[40vh] md:m-0 m-auto object-contain" src={""} />
                                            </a>
                                            <div className="m-2 flex flex-col text-center space-y-2 place-items-center justify-between">
                                                <h2 className="text-gray-700 text-sm font-semibold flex-grow"></h2>
                                                <p className="font-bold mb-2"><s className='text-gray-400 font-semibold mr-1'>₹699</s>₹499</p>
                                            </div>
                                        </div>
                                </Link>
                                <Link href={`/product/`}>
                                        <div className="xl:w-1/5 md:w-1/3 sm:w-1/2 w-full p-0 cursor-pointer shadow-xl m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                                            <a className="block relative rounded overflow-hidden">
                                                <img alt="ecommerce" className="block h-[40vh] md:m-0 m-auto object-contain" src={""} />
                                            </a>
                                            <div className="m-2 flex flex-col text-center space-y-2 place-items-center justify-between">
                                                <h2 className="text-gray-700 text-sm font-semibold flex-grow"></h2>
                                                <p className="font-bold mb-2"><s className='text-gray-400 font-semibold mr-1'>₹699</s>₹499</p>
                                            </div>
                                        </div>
                                </Link>
                        </div>
                    </div>
                    <div className='border-b-[2px] border-sky-700 my-20 w-96 mx-auto'></div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/3 md:w-1/2 w-full p-4 text-center">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-sky-100 text-sky-700 mb-4">
                                    <span><FaTshirt /></span>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Premium Quality</h2>
                                <p className="leading-relaxed text-base">Our apparels are 100% cotton made.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 w-full p-4 text-center">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-sky-100 text-sky-700 mb-4">
                                    <span><FaShippingFast /></span>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Free Shipping</h2>
                                <p className="leading-relaxed text-base">We ship all over India for FREE.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 w-full p-4 text-center">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-sky-100 text-sky-700 mb-4">
                                    <span><MdLocalOffer /></span>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Exciting Offers</h2>
                                <p className="leading-relaxed text-base">We provide amazing offers {'&'} discounts on our products.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
