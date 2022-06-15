import React from 'react'

const AllOrders = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pb-24 pt-10 mx-auto">
                <div className="flex flex-col">
                    <div className="flex flex-wrap sm:flex-row flex-col py-2">
                        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Your Orders</h1>
                    </div>
                    <div className="h-1 rounded overflow-hidden mb-12">
                        <div className="w-20 h-full bg-sky-700"></div>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center">
                    <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503"/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
                        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504"/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The Catalyzer</h2>
                        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505"/>
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
                        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllOrders