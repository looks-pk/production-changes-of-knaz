import React from 'react'
import Order123 from '../Models/Order123'
import mongoose from 'mongoose'
const Order = ({orderss}) => {
  const products = orderss.cart
  console.log(orderss.cart)

  
  return (
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className=" w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">KNAZ.PK</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order ID: {orderss._id}</h1>
        <p className="leading-relaxed mb-4">Your Order Hasbeen Successfully Placed</p>
        <div className="flex border-2 ">
          <a className="flex-grow text-indigo-500 border-b-2  py-2 text-lg ">Item Description</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg ">Quantity</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg">Item Total</a>
        </div>


        {Object.keys(products).map((key)=>{ return <div key={key} className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">{products[key].name} - ({products[key].variant}/{products[key].size})</span>
          <span className="m-auto text-gray-900">{products[key].qty}</span>
          <span className="m-auto text-gray-900">{products[key].price}</span>
          <img className=' w-14 rounded-md' src={products[key].img} alt="" />
        </div>})}


        {/* <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Frooks Blue/Med</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">800</span>
        </div> */}


        {/* <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Frooks Blue/Med</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">999</span>
        </div> */}


        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">Rs {orderss.subTotal}</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track Order</button>
          
        </div>
      </div>
      {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/> */}
    </div>
  </div>
</section>
  )
}



export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let orderss = await Order123.findById(context.query.id);

  
  return {
    props: {orderss: JSON.parse(JSON.stringify(orderss))}
    }
}

export default Order
