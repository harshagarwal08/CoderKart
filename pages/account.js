import React, {useEffect} from 'react'
import {useRouter} from 'next/router'

const Account = () => {
    const router = useRouter()
    useEffect(() => {
      if(!localStorage.getItem('myUser'))router.push('/')
    })
    
  return (
    <div>Account</div>
  )
}

export default Account