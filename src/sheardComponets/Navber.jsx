import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"
import { MdSearch } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navber = () => {
    const nav = < >
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/conatct">Contact</NavLink></li>
    </>
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
                </div>
            </div>
        </div>
    );
};

export default Navber;