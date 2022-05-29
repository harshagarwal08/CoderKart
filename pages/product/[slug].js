import React,{useState} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
const Product = ({addToCart}) => {
  const router = useRouter();
  const { slug } = router.query
  const [pin, setPin] = useState()
  const [service, setService] = useState()
  const checkServiceability = async() => {
    let pins = await fetch('http://localhost:3000/api/pincode')
    let pinJson = await pins.json()
    if(pinJson.includes(pin)) setService(true);
    else setService(false);
  }
  const onChangePin = (e) => {
    setPin(e.target.value)
  }
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto object-contain object-center rounded max-h-[450px]" src="https://m.media-amazon.com/images/I/51sNJt1dcwL._UL1500_.jpg"/>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">CoderKart</h2>
            <h1 className="text-gray-900 text-xl title-font font-medium mb-5">{`Wear The Code - It's not a BUG Tshirt`}</h1>
            <span className="title-font font-bold text-xl text-gray-900"> <s className='text-gray-400 font-semibold'>₹699</s> ₹499.00</span>
            <p className="leading-relaxed mt-5">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
            <div className='border-b-2 border-gray-100'>
              <div className="flex items-center pb-5 mt-5 mb-2">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-sky-700 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-700 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
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
                <input onChange={onChangePin} type="text" className='border-2 border-gray-400 rounded-md px-2' placeholder='Enter your pincode'/>
                <button onClick = {checkServiceability} className="ml-3 flex text-white bg-sky-700  border-0 py-2 px-6 focus:outline-none hover:bg-sky-800 rounded">Check</button>
            </div>
                {!service && service!=null &&
              <div className="text-red-700 text-sm mt-3">
              Sorry! We do not deliver to this pincode yet.</div> }
              {service && service!=null &&
              <div className="text-green-700 text-sm mt-3">
              Yay! This pincode is serviceable.</div>}
              </div>
            </div>
            <div className="flex justify-center md:justify-start mt-10">
              <button onClick={()=>addToCart(slug, 1, 499, `Wear The Code - It's not a BUG Tshirt`,'M', 'Red')} className="flex text-white bg-sky-700 border-0 py-2 px-6 focus:outline-none hover:bg-sky-800 rounded">Add to Cart</button>
              <Link href={"/checkout"}>
              <button onClick={()=>addToCart(slug, 1, 499, `Wear The Code - It's not a BUG Tshirt`,'M', 'Red')}  className="ml-3 text-white bg-orange-700  border-0 py-2 px-6 focus:outline-none hover:bg-orange-800 rounded">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>)
}

export default Product