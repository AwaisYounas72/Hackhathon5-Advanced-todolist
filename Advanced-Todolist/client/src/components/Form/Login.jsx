import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let navigate = useNavigate();

  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const getUser = async () => {
    let token = localStorage.getItem('token');
    if (!token) {
      return navigate("/login");
    } else {
      const res = await fetch('https://hackhathon5-advanced-todolist.vercel.app/api/auth/sign-in', {
        method: "post",
        headers: {
          "content-type": "application/json",
          "token": token
        }
      });
      if (!res.ok) {
        return navigate("/login");
      }
      const result = await res.json();
      if (!result.user) {
        navigate("/sign-up");
      } else {
        navigate("/");
      }
    }
  };
  
  const handleSubmit = async () => {
    const res = await fetch('https://hackhathon5-advanced-todolist.vercel.app/api/auth/login', {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    
    const result = await res.json();
    
    if (res.ok) {
      localStorage.setItem("token", result.token);
      getUser();
      // Show toast message on successful login
      toast.success('User logged in successfully!');
    } else {
      // Show toast message on login failure
      toast.error('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <h2 className="text-3xl mb-4 text-center text-gray-800 font-semibold">Sign In</h2>
        <div className="mb-4">
          <input
            autoComplete="off"
            id="email"
            name="email"
            type="text"
            placeholder="Email address"
            className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-blue-500 w-full text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
          onClick={handleSubmit}
        >
          Sign In
        </button>
        <p>Not Registered? <Link to={"/sign-up"} className="text-base tracking-wider font-bold ml-2 mr-1 hover:underline cursor-pointer">Signup</Link></p>
      </div>
      {/* Toast container for displaying messages */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Login;
