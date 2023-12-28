/* eslint-disable react/no-unknown-property */

import { useState } from "react"
import {Link,useNavigate} from "react-router-dom"

const Signup = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    let navigate = useNavigate();

    const handleInputChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value)
        }
        else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
        else if (e.target.name === "name") {
            setName(e.target.value)
        }
    }

    const handleSubmit = async () => {
        console.log({name,email,password})
        const res = await fetch('https://hackhathon5-advanced-todolist.vercel.app/api/auth/register', {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        })
        const result = await res.json();
        console.log(Object.values(result))
        localStorage.setItem("signup", Object.values(result));
        navigate("/login")
    }

    return (
        // <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        //     <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        //         <div
        //             className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        //         </div>
        //         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

        //             <div className="max-w-md mx-auto">
        //                 <div>
        //                     <h1 className="text-2xl font-semibold">Signup</h1>
        //                 </div>
        //                 <div className="divide-y divide-gray-200">
        //                     <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
        //                         <div className="relative">
        //                             <input autoComplete="off" id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="e.g, Willey" onChange={handleInputChange} />
        //                             <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
        //                         </div>
        //                         <div className="relative">
        //                             <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" onChange={handleInputChange} />
        //                             <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
        //                         </div>
        //                         <div className="relative">
        //                             <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" onChange={handleInputChange} />
        //                             <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"  >Password</label>
        //                         </div>
        //                         <div className="relative">
        //                             <button className="bg-cyan-500 text-white rounded-md px-2 py-1" onClick={handleSubmit}>Signup</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="w-full flex justify-center">
        //                 Already Registered? <Link to={"/login"} className="text-base tracking-wider font-bold ml-2 mr-1 hover:underline cursor-pointer">Login</Link> Now!
        //             </div>

        //         </div>
        //     </div>
        // </div>






        // ...........







        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up for an account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm space-y-px flex flex-col gap-5">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>


              {/* <input autoComplete="off" id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="e.g, Willey" onChange={handleInputChange} /> */}


              <input
               id="name" name="name" type="text" 
                autoComplete="username"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900   focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>

              {/* <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" onChange={handleInputChange} /> */}

              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>



              {/* ....? */}
              {/* <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" onChange={handleInputChange} /> */}
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="off"
                required
                className="appearance-none  relative block w-full px-3 py-2 rounded-md border border-gray-300 placeholder-gray-500 text-gray-900   focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleSubmit}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
            <p>Already Registered? <Link to={"/login"} className="text-base tracking-wider font-bold ml-2 mr-1 hover:underline cursor-pointer">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
    )
}

export default Signup