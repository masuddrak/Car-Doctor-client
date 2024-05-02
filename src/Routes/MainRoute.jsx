import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Blogs from "../pages/Blogs";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/services",
                element:<Services></Services>
            },
            {
                path:"/blogs",
                element:<Blogs></Blogs>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/conatct",
                element:<Contact></Contact>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
           
        ]
    },
]);



export default router;