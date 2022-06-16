import React, { useEffect } from 'react'
import { useRouter } from 'next/router'


const Forgot = () => {
  const router = useRouter()
  useEffect(() => {
    if (!localStorage.getItem('myUser')) {
      window.location = `${process.env.NEXT_PUBLIC_HOST}`
    }
  })

  return (
    <div>Forgot</div>
  )
}

export default Forgot