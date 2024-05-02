import {  NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg"
import { MdSearch } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Prvider/AuthProvider";


const Navber = () => {
    const { user, logOut,loader,setLoader } = useContext(AuthContext)
    // console.log(user)
    const nav = < >
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/conatct">Contact</NavLink></li>
        {
            user&&<li><NavLink to="/booking">My Bokking</NavLink></li>
        }
    </>
    const naviget=useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => { 
                naviget("/login")
                setLoader(false)
            })
            .catch(error => console.log(error))
    }
    if(loader){
        return <h1 className="text-4xl">loading........</h1>
    }
    return (
        <div className="shadow-md">
            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {nav}
                        </ul>
                    </div>
                    <a className="w-14"><img className="object-contain" src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <div className="flex gap-4 text-2xl">
                        <MdOutlineShoppingBag></MdOutlineShoppingBag>
                        <MdSearch></MdSearch>
                    </div>
                    <button className="outline outline-2 outline-red-500 px-3 py-1">Appintment</button>
                    {
                        user?.email? <div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Settings</a></li>
                                    <li><button onClick={handleLogOut}>Logout</button></li>
                                </ul>
                            </div>
                        </div> : <NavLink className="outline outline-2 outline-gray-500 px-3 py-1" to="/login">Login</NavLink>
                    }
                   
                </div>
            </div>
        </div>
    );
};

export default Navber;