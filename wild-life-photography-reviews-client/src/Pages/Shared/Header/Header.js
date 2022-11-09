import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import "./Header.css"

const Header = () => {

    const {user, userLogout} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogOut = () =>{
         userLogout()
         .then(() =>{
          navigate("/login")
         })
         .catch(error => console.error(error));
    }

    return (
        <div>
<div className="bg-gray-100 antialiased font-sans">

<div className="lg:px-16 px-8 bg-green-700 shadow-md py-4 md:py-0 rounded-lg">
    <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex-1 flex justify-between items-center  rounded-xl">
            <Link href="" className="text-xl font-semibold text-green-100 hover:text-white tracking-normal">WL-Photography</Link>
        </div>

        <label for="menu-toggle" className="pointer-cursor md:hidden block">
            <svg className="fill-current text-gray-300 hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                viewBox="0 0 20 20">
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
            <nav>
                <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
                    <li><Link className="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800" to="/">Home</Link></li>
                    <li><Link className="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800" to="/services">Services</Link></li>
                    <li><Link className="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800" to="/blog">Blog</Link></li>
         
                    {  user?.uid ?
                      <>
                       <li><Link className="md:px-4  py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800" to="/addServices">Add Services</Link></li>
                      <li><Link className="md:px-4  py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800" to="/myReviews">My Reviews</Link></li>
                      <li><button onClick={handleLogOut} className="md:px-4  py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800">Log Out</button></li>
                      </>
                      :
                      <li><Link className="md:px-6  py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800" to="/login">Login</Link></li>
                    } 
                </ul>
            </nav>
        </div>
    </div>
</div>


 


 


</div>
        </div>
    );
};

export default Header;