import React, { useEffect, useState } from 'react'
import mongoose from "mongoose";
import Order123 from "../Models/Order123";
import User from "../Models/User";
import { useRouter } from 'next/router';
import Link from 'next/link';

const Orders = ({ord, usrID}) => {

let {name, email, password} = usrID



// const [id, setID] = useState("3084849490")

// const idset = (e) => {
// e.preventDefault();
// if(e.target.name == "id"){
//   setID(e.target.value)
// }
// }



  const router = useRouter()
  useEffect(()=>{

      if(!localStorage.getItem('myuser')){
        router.push('/')
      }
    
    
    },[router])



  return (
    <div className='container m-auto min-h-screen'>
        <h1 className='text-2xl font-semibold text-center p-8'>My Orders</h1>
        <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
      {/* <div>
              <label
                htmlFor="fname"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
               id
              </label>
              <input
                onChange={idset}
                name="id"
                id="id"
                value={id}
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-red-300 rounded outline-none transition duration-100 px-3 py-2"
              />
              <button className='btn btn-primary bg-red-400 rounded-md text-sm p-2'>submit</button>
            </div> */}
        <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                NO
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                ORDER-ID
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Full Name
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Mobile NO.
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Your Adress
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900  px-6 py-4 text-left">
                Message
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900  px-6 py-4 text-left">
                subtotal
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900  px-6 py-4 text-left">
                cart
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900  px-6 py-4 text-left">
                <Link href={"/"}>Details</Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(ord).map((k,i)=>{ return  <tr key={k} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i+1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ord[k]._id}</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {ord[k].fname}-{ord[k].lname}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {ord[k].mobile}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {ord[k].adress}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {ord[k].message}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {ord[k].subTotal}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {ord[k].subTotal}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <Link href={`/Order?id=${ord[k]._id}`}>Details Of Order</Link>
              </td>
            </tr>})}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<div className='text-center' >
  <h1 className='text-3xl mt-2 mb-5'>Your Personal Details</h1>
<h1 className='text-xl'>Phone Number</h1><p>{email}</p>
  <br />
  <h1 className='text-xl'>Full Name</h1><p>{name}</p>
  <br />
  <h1 className='text-xl'>Your Password</h1><p>{password}</p>
</div>
    </div>
  )
}


export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let or = await Order123.find({mobile: "+923084849490"});
  let ord = await JSON.parse(JSON.stringify(or))
  let usr = await User.findOne({email: "+923084849490"});
  let usrID = await JSON.parse(JSON.stringify(usr))


  
  return { props: { ord, usrID }   }
}


export default Orders