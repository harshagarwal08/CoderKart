import React from 'react'
import Link from 'next/link'

const Tshirts = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container lg:px-16 md:px-1 px-8 py-16 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          <Link href={'/product/wear-the-code'}>
          <div className="xl:w-1/4 md:w-1/3 p-4 w-full cursor-pointer shadow-lg m-3 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <a className="block relative rounded overflow-hidden">
              <img alt="ecommerce" className="block h-[30vh] md:h-[36vh] m-auto md:m-0" src="https://dummyimage.com/421x261" />
            </a>
            <div className="mt-4 text-center md:text-left">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Wear The Code</h2>
              <p className="mt-1">₹499</p>
            </div>
          </div>
          </Link>
          <Link href={'/product/wear-the-code'}>
          <div className="xl:w-1/4 md:w-1/3 p-4 w-full cursor-pointer shadow-lg m-3 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <a className="block relative rounded overflow-hidden">
              <img alt="ecommerce" className="block h-[30vh] md:h-[36vh] m-auto md:m-0" src="https://dummyimage.com/421x261" />
            </a>
            <div className="mt-4 text-center md:text-left">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Wear The Code</h2>
              <p className="mt-1">₹499</p>
            </div>
          </div>
          </Link>
          <Link href={'/product/wear-the-code'}>
          <div className="xl:w-1/4 md:w-1/3 p-4 w-full cursor-pointer shadow-lg m-3 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <a className="block relative rounded overflow-hidden">
              <img alt="ecommerce" className="block h-[30vh] md:h-[36vh] m-auto md:m-0" src="https://dummyimage.com/421x261" />
            </a>
            <div className="mt-4 text-center md:text-left">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Wear The Code</h2>
              <p className="mt-1">₹499</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Tshirts