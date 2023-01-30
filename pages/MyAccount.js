import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyAccount = () => {
  const router = useRouter()

  const [fullname, setFullname] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [cnewpassword, setCNewPassword] = useState("");

  const [user, setUser] = useState({ value: null })

  useEffect(() => {

    const myuser = JSON.parse(localStorage.getItem('myuser'))
    if (!myuser) {
      router.push('/')
    }
    if (myuser && myuser.token) {
      setUser(myuser)
      setEmail(myuser.email)
    }
    fetchData(myuser.token)
  }, [router])


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

  const handleUserSubmit = async (e) => {
    e.preventDefault()
    const data = { token: user.token, fullname, adress, city, state };

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateuser`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
  };

  const handleUpdatePass = async (e) => {
    e.preventDefault()
    if (newpassword == cnewpassword){
      const data = { token: user.token, password, newpassword, cnewpassword };
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updatepassword`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let response = await res.json();
      console.log(response)
    }
  }
    
  const handleChange = (e) => {
    if (e.target.name == "fullname") {
      setFullname(e.target.value);
    } else if (e.target.name == "city") {
      setCity(e.target.value);
    } else if (e.target.name == "state") {
      setState(e.target.value);
    } else if (e.target.name == "mobile") {
      setMobile(e.target.value);
    } else if (e.target.name == "adress") {
      setAdress(e.target.value);
    } else if (e.target.name == "message") {
      setMessage(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    } else if (e.target.name == "newpassword") {
      setNewPassword(e.target.value);
    } else if (e.target.name == "cnewpassword") {
      setCNewPassword(e.target.value);
    }
  };




  return (
    <>
      <div className='container mx-auto'>
        <h1 className='text-3xl text-center font-bold'>Account Management</h1>
      </div>
      <div>
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
            <form className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
              <h3 className='text-lg font-bold my-3'>1. Account Details</h3>
              <div></div>

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
                  htmlFor="email"
                  className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  Email (Not Change able)
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
                  htmlFor="adress"
                  className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  Adress
                </label>
                <input
                  onChange={handleChange}
                  name="adress"
                  id="adress"
                  value={adress}
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-red-300 rounded outline-none transition duration-100 px-3 py-2"
                />
              </div>
              <div className="sm:col-span-2 flex justify-between items-center">
                <button onClick={handleUserSubmit} className="inline-block bg-red-500 hover:bg-red-600 active:bg-red-700 focus-visible:ring ring-red-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Submit
                </button>

                <span className="text-gray-500 text-sm">Required</span>
              </div>
              <h3 className='text-lg font-bold my-3'>2. Change Password</h3>
              <div></div>
              <div>
                <label
                  htmlFor="password"
                  className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  Password
                </label>
                <input
                  onChange={handleChange}
                  name="password"
                  id="password"
                  value={password}
                  type="password"
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-red-300 rounded outline-none transition duration-100 px-3 py-2"
                />
              </div>

              <div>
                <label
                  htmlFor="newpassword"
                  className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  New Password
                </label>
                <input
                  onChange={handleChange}
                  name="newpassword"
                  id="newpassword"
                  value={newpassword}
                  type="password"
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-red-300 rounded outline-none transition duration-100 px-3 py-2"
                />
              </div>

              <div>
                <label
                  htmlFor="cnewpassword"
                  className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  Confirm New Password
                </label>
                <input
                  onChange={handleChange}
                  name="cnewpassword"
                  id="cnewpassword"
                  value={cnewpassword}
                  type="password"
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-red-300 rounded outline-none transition duration-100 px-3 py-2"
                />
              </div>

              <div className="sm:col-span-2 flex justify-between items-center">
                <button onClick={handleUpdatePass} className="inline-block bg-red-500 hover:bg-red-600 active:bg-red-700 focus-visible:ring ring-red-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Submit
                </button>

                <span className="text-gray-500 text-sm">Required</span>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyAccount
