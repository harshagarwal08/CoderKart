import React,{useEffect} from 'react'
import { useRouter } from 'next/router'


const Forgot = () => {
  const router = useRouter()
  useEffect(() => {
    if(localStorage.getItem('token')) router.push('/')
  }, [])
  
  return (
    <div>Forgot</div>
  )
}

export default Forgot