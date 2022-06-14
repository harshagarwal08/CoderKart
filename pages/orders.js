import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Orders = () => {
    const router = useRouter()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const fetchOrder = async() => {
            const result = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myOrders`, {
                method: 'POST',
                body: JSON.stringify({token: JSON.parse(localStorage.getItem('myUser')).token}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let res = await result.json()
            setOrders(res.orders);
        }
        if(!localStorage.getItem('myUser')){
        router.push('/')
        }
        else{
            fetchOrder()
        }
    })
    return (
        <div>
            <div className="container xl:w-3/5 mx-auto w-full">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden mb-10">
                                {orders.length==0 && <h1 className='text-center font-semibold mt-20'>You haven&apos;t placed any orders yet.</h1>}
                                {orders.length > 0 && <>
                                <h1 className="font-bold text-xl py-8 px-4 text-center md:text-left">Your Orders</h1>
                                <table className="min-w-full">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-bold px-6 py-4 text-center">
                                                Order Id
                                            </th>
                                            <th scope="col" className="text-sm font-bold px-6 py-4 text-center">
                                                Order Date
                                            </th>
                                            <th scope="col" className="text-sm font-bold px-6 py-4 text-center">
                                                Order Status
                                            </th>
                                            {/* <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Details
                                            </th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map(item=>{
                                             return <Link href={`/orderDetails?id=${item.orderId}`} key={item._id}>
                                             <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer">
                                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">{item.orderId}</td>
                                              <td className="text-sm font-medium px-6 py-4 whitespace-nowrap text-center">
                                              {(new Date(item.createdAt)).toLocaleDateString()}
                                              </td>
                                              <td className="text-sm font-medium px-6 py-4 whitespace-nowrap text-center">
                                                  {item.status}
                                              </td>
                                              {/* <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                              </td> */}
                                          </tr>
                                              </Link>
                                        })}
                                    </tbody>
                                </table>
                                </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders