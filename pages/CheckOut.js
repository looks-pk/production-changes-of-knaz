import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOut = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  // let cc = JSON.parse(JSON.stringify(cart))
  // let bb = Object.keys(cc).itemCode


  const [fullname, setFullname] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({ value: null })


  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem('myuser'))
    if (myuser && myuser.token) {
      setUser(myuser)
      setEmail(myuser.email)
      fetchData(myuser.token)
    }
  }, [])

  const fetchData = async (token) => {
    let data = { token: token };

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response)
    setFullname(response.name)
    setMobile(response.mobile)
    setCity(response.city)
    setState(response.state)
    setAdress(response.adress)
  }


  const handleChange = (e) => {
    if (e.target.name == "fullname") {
      setFullname(e.target.value);
    } 
    else if (e.target.name == "city") {
      setCity(e.target.value);
    }
    else if (e.target.name == "state") {
      setState(e.target.value);

    } else if (e.target.name == "mobile") {
      setMobile(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "adress") {
      setAdress(e.target.value);
    } else if (e.target.name == "message") {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { fullname, mobile, city, state, email, adress, message, subTotal, cart };

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/order`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    if (response.success) {

      toast.success(`${response.success}`, {
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
    else {
      toast.error(`${response.error}`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      clearCart()
    }
  };

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12 min-h-screen">
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
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Check Out Page
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
            <div>
              <label
                htmlFor="fullname"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Full Name
              </label>
              <input
                onChange={handleChange}
                name="fullname"
                id="fullname"
                value={fullname}
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-red-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Mobile Number
              </label>
              <input
                onChange={handleChange}
                name="mobile"
                id="mobile"
                value={mobile}
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-red-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                City
              </label>
              <input
                onChange={handleChange}
                name="city"
                id="city"
                value={city}
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-red-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="state"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                State
              </label>
              <input
                onChange={handleChange}
                name="state"
                id="state"
                value={state}
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-red-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            
            <div className="sm:col-span-2">
              <label
                htmlFor="adress"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
              House and street No With area name
              </label>
              <input
                onChange={handleChange}
                name="adress"
                id="adress"
                value={adress}
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-red-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Email
              </label>
              {user && user.token ? <input
                name="email"
                id="email"
                value={user.email}
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-red-300 rounded outline-none transition duration-100 px-3 py-2"
                readOnly
              /> : <input
                onChange={handleChange}
                name="email"
                id="email"
                value={email}
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-red-300 rounded outline-none transition duration-100 px-3 py-2"
              />}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Any Thing Els U want To say
              </label>
              <textarea
                onChange={handleChange}
                name="message"
                id="message"
                value={message}
                className="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-red-300 rounded outline-none transition duration-100 px-3 py-2"
              ></textarea>
            </div>

            <div className="sm:col-span-2 flex justify-between items-center">
              <button

                className="inline-block bg-red-500 hover:bg-red-600 active:bg-red-700 focus-visible:ring ring-red-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                RS {subTotal} Place Order
              </button>

              <span className="text-gray-500 text-sm">Required</span>
            </div>

            <p className="text-gray-400 text-xs">
              By signing up to our newsletter you agree to our{" "}
              <a
                href=""
                className="hover:text-red-500 active:text-red-600 underline transition duration-100"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
        {Object.keys(cart).map((k) => {
          return (
            <div key={k}>
              <div className="flex justify-center  gap-4 md:gap-6 mb-6 sm:mb-8">
                {/* <!-- product - start --> */}
                <div className="flex flex-wrap border rounded-lg overflow-hidden gap-x-4 sm:gap-y-4 lg:gap-6">
                  <div className="flex flex-col justify-between flex-1 py-4">
                    <div>
                      <a
                        href={`/product/${cart[k].itemCode}`}
                        className="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1"
                      >
                        {cart[k].name}
                      </a>

                      <span className="block text-gray-500">
                        Size: {cart[k].size}
                      </span>
                      <span className="block text-gray-500">
                        Color: {cart[k].variant}
                      </span>
                    </div>

                    <div>
                      <span className="block text-gray-800 md:text-lg font-bold mb-1">
                        RS {cart[k].price}
                      </span>

                      <span className="flex items-center text-gray-500 text-sm gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        In stock
                      </span>
                    </div>
                  </div>

                  <div className="w-full sm:w-auto flex justify-between border-t sm:border-none p-4 sm:pl-0 lg:p-6 lg:pl-0">
                    <div className="flex flex-col items-start gap-2">
                      <div className="w-30 h-20flex border rounded overflow-hidden">
                        <div className="flex flex-row border-l divide-y">
                          <button
                            onClick={() => {
                              addToCart(
                                k,
                                1,
                                cart[k].price,
                                cart[k].name,
                                cart[k].size,
                                cart[k].variant
                              );
                            }}
                            className="w-20 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none text-2xl select-none transition duration-100"
                          >
                            +
                          </button>
                          <button
                            onClick={() => {
                              removeFromCart(
                                k,
                                1,
                                cart[k].price,
                                cart[k].name,
                                cart[k].size,
                                cart[k].variant
                              );
                            }}
                            className="w-6 flex text-2xl justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100"
                          >
                            -
                          </button>
                          <span className="w-20 focus:ring ring-inset ring-indigo-300 outline-none transition duration-100 px-5 py-1">
                            {cart[k].qty}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={clearCart}
                        className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100"
                      >
                        Delete
                      </button>
                    </div>

                    <div className="pt-3 md:pt-2 ml-4 md:ml-8 lg:ml-16">
                      <span className="block text-gray-800 md:text-lg font-bold">
                        {cart[k].qty * cart[k].price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckOut;
