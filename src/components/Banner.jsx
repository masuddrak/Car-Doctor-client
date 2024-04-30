import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../assets/images/banner/1.jpg"
import image2 from "../assets/images/banner/2.jpg"
import image3 from "../assets/images/banner/3.jpg"
import image4 from "../assets/images/banner/4.jpg"

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full md:h-[400px]">
                <div id="slide1" className="carousel-item relative w-full min-h-[200px] ">
                    <img src={image1} className="w-full object-cover " />
                    <div className="absolute w-full text-white h-full flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="space-y-4 p-5 w-full md:w-1/3 lg:w-2/3">
                            <h2 className="text-4xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-4">
                                <button className=" bg-red-500 px-3 py-1">Discover More</button>
                                <button className="outline outline-2 outline-red-500 px-3 py-1">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-10 right-5 bottom-10">
                        <a href="#slide4" className="btn btn-circle"><FaArrowLeft></FaArrowLeft></a>
                        <a href="#slide2" className="btn btn-circle border-0 bg-red-500 text-white"><FaArrowRight></FaArrowRight></a>
                    </div>
                </div>
               

                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full object-cover " />
                    <div className="absolute w-full text-white h-full flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="space-y-4 p-5 w-full md:w-1/3 lg:w-2/3">
                            <h2 className="text-4xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-4">
                                <button className=" bg-red-500 px-3 py-1">Discover More</button>
                                <button className="outline outline-2 outline-red-500 px-3 py-1">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-10 right-5 bottom-10">
                        <a href="#slide1" className="btn btn-circle"><FaArrowLeft></FaArrowLeft></a>
                        <a href="#slide3" className="btn btn-circle border-0 bg-red-500 text-white"><FaArrowRight></FaArrowRight></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image3} className="w-full object-cover" />
                    <div className="absolute w-full text-white h-full flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="space-y-4 p-5 w-full md:w-1/3 lg:w-2/3">
                            <h2 className="text-4xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-4">
                                <button className=" bg-red-500 px-3 py-1">Discover More</button>
                                <button className="outline outline-2 outline-red-500 px-3 py-1">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-10 right-5 bottom-10">
                        <a href="#slide2" className="btn btn-circle"><FaArrowLeft></FaArrowLeft></a>
                        <a href="#slide4" className="btn btn-circle border-0 bg-red-500 text-white"><FaArrowRight></FaArrowRight></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={image4} className="w-full object-cover" />
                    <div className="absolute w-full text-white h-full flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="space-y-4 p-5 w-full md:w-1/3 lg:w-2/3">
                            <h2 className="text-4xl font-bold">Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-4">
                                <button className=" bg-red-500 px-3 py-1">Discover More</button>
                                <button className="outline outline-2 outline-red-500 px-3 py-1">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-10 right-5 bottom-10">
                        <a href="#slide2" className="btn btn-circle"><FaArrowLeft></FaArrowLeft></a>
                        <a href="#slide1" className="btn btn-circle border-0 bg-red-500 text-white"><FaArrowRight></FaArrowRight></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;