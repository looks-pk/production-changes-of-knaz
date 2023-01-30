import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ForgotPass = () => {
  const router = useRouter()
  useEffect(()=>{

    if(localStorage.getItem('token')){
      router.push('/')
    }


  },[router])


  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">For Got Your Password !</h2>

    <form className="max-w-lg border rounded-lg mx-auto">
      <div className="flex flex-col gap-4 p-4 md:p-8">
        <div>
          <label for="email" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Email</label>
          <input name="email" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
        </div>

        <div>
          <label for="password" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Password</label>
          <input name="password" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
        </div>

        <button className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Resset My Password</button>
      </div>
    </form>
  </div>
</div>
  )
}

export default ForgotPass
