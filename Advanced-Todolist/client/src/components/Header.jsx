import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
const Header = () => {
    const [token, setToken] = useState();
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("token")
    }
    return (
         
        <div>
  <header className="text-gray-700 bg-gray-200 body-font flex items-center">
    <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center justify-between">
      <a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
        <img src="https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/TODO-Group-900x0.png" alt="sfsf" width={120} height={120}  />
        {/* <span className="ml-3 text-xl">TodoApp</span> */}
      </a>
      <div className="flex space-x-5 items-center mt-4">
        {token ? (
          <Link to={"/login"} className="inline-flex items-center bg-white text-black border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 rounded text-base md:mt-0" onClick={handleLogout}>
            Logout
          </Link>
        ) : (
          <div className="space-x-2">
            <Link to={"/login"} className="inline-flex items-center bg-gray-800 border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              Login
            </Link>
            <Link to={"/sign-up"} className="inline-flex items-center bg-gray-800 border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              Signup
            </Link>
          </div>
        )}
        <DarkMode />
      </div>
    </div>
  </header>
</div>

    )
}

export default Header