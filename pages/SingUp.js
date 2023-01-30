import React, { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';


const SingUp = () => {

  const router = useRouter()

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

useEffect(()=>{

  if(localStorage.getItem('token')){
    router.push('/')
  }


},[router])


const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {name, email, password}

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      let response = await res.json()
      console.log(response)
    setEmail('')
    setName('')
    setPassword('')
    toast.success('Your Account Hasbeen Created Yayy!', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
}


const handleChange = (e) => {
  if(e.target.name == 'name'){
    setName(e.target.value)
  }
 else if(e.target.name == 'email'){
  setEmail(e.target.value)
 }
 else if(e.target.name == 'password'){
  setPassword(e.target.value)
 }
}


  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
  <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">Register Here</h2>

    <form onSubmit={handleSubmit} className="max-w-lg border rounded-lg mx-auto" method='POST'>
      <div className="flex flex-col gap-4 p-4 md:p-8">
        <div>
          <label htmlFor="name" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Name</label>
          <input value={name} onChange={handleChange} name="name" id="name" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
        </div>
        <div>
          <label htmlFor="email" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Email</label>
          <input value={email} onChange={handleChange} name="email" id='email' className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
        </div>

        <div>
          <label htmlFor="password" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Password</label>
          <input value={password} onChange={handleChange} id="password" name="password" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
        </div>

        {/* <div>
          <label for="password" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Confirm Password</label>
          <input name="password" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
        </div>

        <div>
          <label for="password" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Mobile Number</label>
          <input name="password" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
        </div> */}

        <button className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-bold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Register Now</button>
      </div>
    </form>
  </div>
</div>
  )
}

export default SingUp
