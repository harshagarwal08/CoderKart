import React from 'react'
import Link from 'next/link'

const Stickers = () => {
  return (
    <div><section className="text-gray-600 body-font">
    <div className="container px-32 py-24 mx-auto">
      <div className="flex flex-wrap -m-4 justify-center">
      <Link href={'/product/wear-the-code'}>
          <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-3 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <a className="block relative rounded overflow-hidden">
              <img alt="ecommerce" className="block h-[30vh] md:h-[36vh] m-auto md:m-0" src="https://dummyimage.com/421x261" />
            </a>
            <div className="mt-4 text-center md:text-left">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stickers</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Wear The Code</h2>
              <p className="mt-1">₹49</p>
            </div>
          </div>
          </Link>
      </div>
    </div>
  </section></div> 
  )
}

export default Stickers