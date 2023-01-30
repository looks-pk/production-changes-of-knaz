import Link from "next/link";
import React from "react";
import Product from "../Models/Product";
import mongoose from "mongoose";
import Image from "next/image";

const Soots = ({products}) => {
  return (
    <div>
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center ">
              
            {Object.keys(products).length === 0 && <p>Sorry All The Soots Are Cruntly Out Of Stock. New Stock Comming Soon Stay Tuned !  </p>}
            {Object.keys(products).map((item)=>{ 

            return   <Link passHref={true} key={products[item]._id} href={`/product/${products[item].slug}`} legacyBehavior>
              <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                <a className="block relative  rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className=" m-auto h-[30vh] block"
                    src={products[item].img}
                    // width={100}
                    // height={100}
                  />
                </a>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                   {products[item].category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {products[item].title}
                  </h2>
                  <p className="mt-1">₨ {products[item].price}</p>
                  {/* <p className="mt-1">{products[item].size}</p> */}
                  <div className="mt-1">
                  {products[item].size.includes('S') &&   <span className="border border-gray-400 px-1 mx-1">S</span>}
                  {products[item].size.includes('M') &&   <span className="border border-gray-400 px-1 mx-1">M</span>}
                  {products[item].size.includes('L') &&   <span className="border border-gray-400 px-1 mx-1">L</span>}
                  {products[item].size.includes('XL') &&  <span className="border border-gray-400 px-1 mx-1">XL</span>}
                  {products[item].size.includes('XXL') && <span className="border border-gray-400 px-1 mx-1">XXl</span>}
                  </div>
                  <div className="mt-1">
                  {products[item].color.includes('red') &&    <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].color.includes('white') &&    <button className="border-2 border-gray-300 ml-1 bg-white-500 rounded-full w-6 h-6 focus:outline-none"></button> }
                  {products[item].color.includes('black') &&    <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].color.includes('blue') &&   <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].color.includes('yellow') &&  <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"> </button>}
                  </div>
                </div>
              </div>
            </Link> })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let products = await Product.find({category: 'soots'})
  let soots = {}
        for (let item of products){
          if(item.title in soots){
                    if(!soots[item.title].color.includes(item.color) && item.availbleQty > 0){ 
                      soots[item.title].color.push(item.color)
                    }
                    if(!soots[item.title].size.includes(item.size) && item.availbleQty > 0){ 
                      soots[item.title].size.push(item.size)
                    }
          }
          else{
                soots[item.title] = JSON.parse(JSON.stringify(item))
                if(item.availbleQty > 0){
                  soots[item.title].color = [item.color]
                  soots[item.title].size = [item.size]
                }
          }
        }

  
  return {
    props: {products: JSON.parse(JSON.stringify(soots))}, // will be passed to the page component as props
  };
}

export default Soots;
