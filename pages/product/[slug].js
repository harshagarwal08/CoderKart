import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import mongoose from 'mongoose'
import Product from '../../models/Product'

const Item = ({ addToCart, product, variants }) => {
  const router = useRouter();
  const { slug } = router.query
  const [pin, setPin] = useState()
  const [service, setService] = useState()
  const checkServiceability = async () => {
    let pins = await fetch('http://localhost:3000/api/pincode')
    let pinJson = await pins.json()
    if (pinJson.includes(pin)) setService(true);
    else setService(false);
  }
  const onChangePin = (e) => {
    setPin(e.target.value)
  }
  const [color, setColor] = useState(product.color)
  const [size, setSize] = useState(product.size)
  const refreshVariants = (newColor, newSize) => {
    let url = `http://localhost:3000/product/${variants[newColor][newSize]['slug']}`
    window.location = url
  }
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto object-contain object-center rounded max-h-[450px]" src="https://m.media-amazon.com/images/I/51sNJt1dcwL._UL1500_.jpg" />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">CoderKart</h2>
            <h1 className="text-gray-900 text-xl title-font font-medium mb-5">{product.title}</h1>
            <span className="title-font font-bold text-xl text-gray-900"> <s className='text-gray-400 font-semibold'>₹699</s> ₹{product.price}</span>
            <p className="leading-relaxed mt-5 mx-2"><ul className='list-disc'>
              <li><strong className='text-gray-500'>Material/ Fabric</strong>: 100% Cotton, Bio-Wash</li>
              <li><strong className='text-gray-500'>Size &amp; Fit</strong>:&nbsp;This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.</li>
              <li><strong className='text-gray-500'>Wash</strong>:&nbsp;Don't use Soap or Detergent directly on print.</li>
            </ul></p>
            <div className='border-b-2 border-gray-100'>
              <div className="flex items-center pb-5 mt-5 mb-2">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {Object.keys(variants).includes('white') && Object.keys(variants['white']).includes(size) &&
                    <button onClick={() => refreshVariants('white', size)} className={`border-2 rounded-full w-6 h-6 focus:outline-none ${color === 'white' ? 'border-black' : 'border-gray-300'} mr-1`}></button>
                  }
                  {Object.keys(variants).includes('black') && Object.keys(variants['black']).includes(size) &&
                    <button onClick={() => refreshVariants('black', size)} className={`border-2 rounded-full w-6 h-6 focus:outline-none ${color === 'black' ? 'border-black' : 'border-gray-300'} mr-1`}></button>
                  }
                  {Object.keys(variants).includes('red') && Object.keys(variants['red']).includes(size) &&
                    <button onClick={() => refreshVariants('red', size)} className={`border-2 bg-red-500 rounded-full w-6 h-6 focus:outline-none ${color === 'red' ? 'border-black' : 'border-gray-300'} mr-1`}></button>
                  }
                  {Object.keys(variants).includes('green') && Object.keys(variants['green']).includes(size) &&
                    <button onClick={() => refreshVariants('green', size)} className={`border-2 bg-green-500 rounded-full w-6 h-6 focus:outline-none ${color === 'green' ? 'border-black' : 'border-gray-300'} mr-1`}></button>
                  }
                  {Object.keys(variants).includes('blue') && Object.keys(variants['blue']).includes(size) &&
                    <button onClick={() => refreshVariants('blue', size)} className={`border-2 bg-blue-500 rounded-full w-6 h-6 focus:outline-none ${color === 'blue' ? 'border-black' : 'border-gray-300'} mr-1`}></button>
                  }
                  {Object.keys(variants).includes('yellow') && Object.keys(variants['yellow']).includes(size) &&
                    <button onClick={() => refreshVariants('yellow', size)} className={`border-2 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none ${color === 'yellow' ? 'border-black' : 'border-gray-300'} mr-1`}></button>
                  }

                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select value={size} onChange={(e) => refreshVariants(color, e.target.value)} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-700 text-base pl-3 pr-10">
                      {Object.keys(variants[color]).includes('S') && <option value={'S'}>S</option>}
                      {Object.keys(variants[color]).includes('M') && <option value={'M'}>M</option>}
                      {Object.keys(variants[color]).includes('L') && <option value={'L'}>L</option>}
                      {Object.keys(variants[color]).includes('XL') && <option value={'XL'}>XL</option>}
                      {Object.keys(variants[color]).includes('XXL') && <option value={'XXL'}>XXL</option>}

                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>

              </div>
              <div className='flex flex-col items-start mb-5'>
                <div className="pincode flex space-x-2 justify-center">
                  <input onChange={onChangePin} type="text" className='border-2 border-gray-400 rounded-md px-2' placeholder='Enter your pincode' />
                  <button onClick={checkServiceability} className="ml-3 flex text-white bg-sky-700  border-0 py-2 px-6 focus:outline-none hover:bg-sky-800 rounded">Check</button>
                </div>
                {!service && service != null &&
                  <div className="text-red-700 text-sm mt-3">
                    Sorry! We do not deliver to this pincode yet.</div>}
                {service && service != null &&
                  <div className="text-green-700 text-sm mt-3">
                    Yay! This pincode is serviceable.</div>}
              </div>
            </div>
            <div className="flex justify-center md:justify-start mt-10">
              <button onClick={() => addToCart(slug, 1, 499, `Wear The Code - It's not a BUG Tshirt`, 'M', 'Red')} className="flex text-white bg-sky-700 border-0 py-2 px-6 focus:outline-none hover:bg-sky-800 rounded">Add to Cart</button>
              <Link href={"/checkout"}>
                <button onClick={() => addToCart(slug, 1, 499, `Wear The Code - It's not a BUG Tshirt`, 'M', 'Red')} className="ml-3 text-white bg-orange-700  border-0 py-2 px-6 focus:outline-none hover:bg-orange-800 rounded">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>)
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let product = await Product.findOne({ slug: context.query.slug })
  let variants = await Product.find({ title: product.title })
  let colorSizeSlug = {}
  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    }
    else {
      colorSizeSlug[item.color] = {}
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    }
  }

  return {
    props: { product: JSON.parse(JSON.stringify(product)), variants: JSON.parse(JSON.stringify(colorSizeSlug)) }
  }
}
export default Item