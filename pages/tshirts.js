import React from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
import Product from '../models/Product'
import Head from 'next/head'

const Tshirts = ({products}) => {
  return (
    <>
    <Head>
      <title>Tshirts - CoderKart</title>
    </Head>
    <section className="text-gray-600 body-font xl:min-h-full min-h-screen">
      <div className="container 2xl:px-16 xl:px-8 lg:px-2 md:px-0 px-8 py-16 w-full mx-auto">
        <div className="flex flex-wrap justify-center">
          { Object.keys(products).map((item)=>{
          return  <Link key={products[item]._id} href={`/product/${products[item].slug}`}>
          <div className="xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-0 cursor-pointer shadow-xl m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <a className="block relative rounded overflow-hidden">
              <img alt="ecommerce" className="block h-[40vh] md:m-0 m-auto object-contain" src={products[item].img}/>
            </a>
            <div className="m-2 flex flex-col text-center space-y-2 place-items-center justify-between">
              <h2 className="text-gray-700 text-sm font-semibold flex-grow">{products[item].title}</h2>
              <p className="font-bold mb-2"><s className='text-gray-400 font-semibold mr-1'>₹699</s>₹{products[item].price}</p>
            </div>
          </div>
          </Link>
        })
        }
        </div>
      </div>
    </section>
    </>
  )
}

export async function getServerSideProps(context){
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find({category: 'tshirts'})
  let tshirts = {}
    for(let item of products){
        if(item.title in tshirts){
            if(!tshirts[item.title].color.includes(item.color) && item.availableQty>0) tshirts[item.title].color.push(item.color)
            if(!tshirts[item.title].size.includes(item.size) && item.availableQty>0) tshirts[item.title].size.push(item.size)
        }
        else{
            tshirts[item.title] = JSON.parse(JSON.stringify(item))
            if(item.availableQty > 0){
                tshirts[item.title].color = [item.color]
                tshirts[item.title].size = [item.size]
            }
            else{
              tshirts[item.title].color = []
              tshirts[item.title].size = []
            }
        }
    }
  return {
    props: {products: JSON.parse(JSON.stringify(tshirts))}
  }
}

export default Tshirts