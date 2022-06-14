import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <Head>
                <title>CoderKart - Coding Apparels and Accessories</title>
                <meta name="description" content="CoderKart.in - Wear the code" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div>
                <img src="/home.jpg" alt="" className='md:h-auto h-[200px] max-w-screen-2xl'/>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col text-left ml-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-sky-700">Our Latest Collection</h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/3 md:w-1/2 w-full p-4 text-center">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-sky-100 text-sky-700 mb-4">
                                <span>icon</span>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Premium Quality</h2>
                                <p className="leading-relaxed text-base">Our apparels are 100% cotton made.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 w-full p-4 text-center">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-sky-100 text-sky-700 mb-4"> 
                                <span>icon</span>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Free Shipping</h2>
                                <p className="leading-relaxed text-base">We ship all over India for FREE.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 w-full p-4 text-center">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-sky-100 text-sky-700 mb-4">
                                <span>icon</span>
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
