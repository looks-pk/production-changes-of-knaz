import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from 'react-top-loading-bar'


export default function App({ Component, pageProps }) {

const [cart, setCart] = useState({})
const [subTotal, setSubtotal] = useState(0)
const [user, setUser] = useState({value: null})
const [key, setKey] = useState()
const [progress, setProgress] = useState(0)

const router = useRouter()

const logout = () => {
  localStorage.removeItem('myuser')
  setUser({value: null})
  setKey(Math.random())
  router.push('/')

}


useEffect(()=>{
  router.events.on('routeChangeStart', ()=>{
    setProgress(40)
  })
  router.events.on('routeChangeComplete', ()=>{
    setProgress(100)
  })
  try {
    
    if(localStorage.getItem("cart")){
      setCart(JSON.parse(localStorage.getItem("cart")))
    }
  } catch (error) {
    console.log(error);
    localStorage.clear()
  }
  const myuser = JSON.parse(localStorage.getItem('myuser'))
  if(myuser){
    setUser({value: myuser.token , email: myuser.email})
  }
  setKey(Math.random())
}, [router.events, router.query])



const saveCart = (myCart) =>{
  localStorage.setItem("cart", JSON.stringify(myCart))
  let subt = 0;
  let keys = Object.keys(myCart)
  for (let i=0; i<keys.length;i++ ){
    subt += myCart[keys[i]]["price"] * myCart[keys[i]].qty;
  }
  setSubtotal(subt)
}


const addToCart = (itemCode, qty , price, name, size, variant, img, productslug) => {
  let newCart = JSON.parse(JSON.stringify(cart))
  if(itemCode in cart){
    newCart[itemCode].qty = cart[itemCode].qty + qty
  }
  else{
    newCart[itemCode] = {qty: 1, price, name, size, img, variant,productslug}
  }
  setCart(newCart)
  saveCart(newCart)
}

const buyNow = (itemCode, qty , price, name, size, variant, img) => {
  let newCart = {}
  newCart[itemCode] = {qty: 1, price, name,  size, variant, img}
  
  setCart(newCart)
  saveCart(newCart)
  router.push('/CheckOut')
}



const clearCart = () => {
  setCart({})
  saveCart({})
}


const removeFromCart = (itemCode, qty , price, name, size, variant) => {
  let newCart = cart;
  if(itemCode in cart){
    newCart[itemCode].qty = cart[itemCode].qty - qty
  }
  if(newCart[itemCode].qty<=0){
   delete newCart[itemCode] 
  }
  setCart(newCart)
  saveCart(newCart)
}





  return (
    <>
    <LoadingBar
        color='#ff0000'
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
     {key && <Navbar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />}
      <Component  buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
      <Footer />
    </>
  );
}
