import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./components/Form/Login"
import Signup from "./components/Form/Signup"
import Home from "./components/Home"

import { useEffect } from "react"


const App = () => {
  const navigate = useNavigate()
  useEffect(() => {
    getUser()
  }, [])
  // Get User Function
  const getUser = async () => {
    let token = localStorage.getItem('token');
    if (!token) {
      return navigate("/login");
    } else {
      const res = await fetch('http://localhost:3000/api/auth/sign-in', {
        method: "post",
        headers: {
          "content-type": "application/json",
          "token": token
        }
      })
      if (!res) {
        return navigate("/login");
      }
      const result = await res.json()
      if (!result.user) {
        navigate("/sign-up")
      }
      else {
        navigate("/")
      }
      console.log(result);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate("/")
    }
  }, [])
  return (
    <div className="">
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<Signup />} />

      </Routes>
    </div>
  )
}

export default App