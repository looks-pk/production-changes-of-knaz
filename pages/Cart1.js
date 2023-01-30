import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Cart1 = ({ cart, addToCart, removeFromCart, clearCart, subTotal}) => {

// console.log(cart)
  const shipping = 100;
  return (
   <>
   <div className="bg-white py-6 sm:py-8 lg:py-0 min-h-screen">
  <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
    <div className="mb-6 sm:mb-10 lg:mb-16">
      <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Your Cart</h2>
    </div>
    {Object.keys(cart).length == 0 && <div className="my-4 font-semibold text-center"> <p>Your Cart Is Empty!</p></div>}
    {Object.keys(cart).map((k)=>{ return<div key={k}>

    <div className="flex flex-col gap-4 md:gap-6 mb-6 sm:mb-8">
      {/* <!-- product - start --> */}
      <div className="flex flex-wrap border rounded-lg overflow-hidden gap-x-4 sm:gap-y-4 lg:gap-6">
        <a href="#" className="group w-32 sm:w-40 h-48 sm:h-56 block bg-gray-100 overflow-hidden relative">
          <img src={cart[k].img} loading="lazy" alt="" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </a>

        <div className="flex flex-col justify-between flex-1 py-4">
          <div>
            <a href={`/product/${cart[k].itemCode}`} className="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">{cart[k].name}</a>

            <span className="block text-gray-500">Size: {cart[k].size}</span>
            <span className="block text-gray-500">Color: {cart[k].variant}</span>
          </div>

          <div>
            <span className="block text-gray-800 md:text-lg font-bold mb-1">RS {cart[k].price}</span>

            <span className="flex items-center text-gray-500 text-sm gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              In stock
            </span>
          </div>
        </div>

        <div className="w-full sm:w-auto flex justify-between border-t sm:border-none p-4 sm:pl-0 lg:p-6 lg:pl-0">
          <div className="flex flex-col items-start gap-2">
            <div className="w-30 h-20flex border rounded overflow-hidden">
              {/* <input type="number" value="1" className="w-full focus:ring ring-inset ring-indigo-300 outline-none transition duration-100 px-4 py-2" /> */}

              <div className="flex flex-row border-l divide-y">
                  <button onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className="w-20 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none text-2xl select-none transition duration-100">+</button>
                  <button onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className="w-6 flex text-2xl justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100">-</button>
                  <span className="w-20 focus:ring ring-inset ring-indigo-300 outline-none transition duration-100 px-5 py-1">{cart[k].qty}</span>
                </div>
            </div>
            <button onClick={clearCart} className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100">Delete</button>
          </div>

          <div className="pt-3 md:pt-2 ml-4 md:ml-8 lg:ml-16">
            <span className="block text-gray-800 md:text-lg font-bold">{cart[k].qty * cart[k].price}</span>
          </div>
        </div>
      </div>
       {/* <!-- product - end --> */}
      
      
    </div>

    </div>})}

    {/* <!-- totals - start --> */}
    {Object.keys(cart).length !== 0 && <div className="flex flex-col items-end gap-4">
      <div className="w-full sm:max-w-xs bg-gray-100 rounded-lg p-4">
        <div className="space-y-1">
          <div className="flex justify-between text-gray-500 gap-4">
            <span>Subtotal</span>
            <span>{subTotal}</span>
          </div>
          
          <div className="flex justify-between text-gray-500 gap-4">
            <span>Shipping</span>
            <span>{shipping}</span>
          </div>
        </div>

        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-start text-gray-800 gap-4">
            <span className="text-lg font-bold">Total</span>

            <span className="flex flex-col items-end">
              <span className="text-lg font-bold">$ {subTotal} USD</span>
              <span className="text-gray-500 text-sm">including VAT</span>
            </span>
          </div>
        </div>
      </div>

      <Link href={"/CheckOut"} ><button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Check out</button></Link>
    </div>}
    
  </div>
</div>
   </>
  )
}

export default Cart1
