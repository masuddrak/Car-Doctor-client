import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
const HomeServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container mx-auto mt-24">
            <div className="text-center">
                <h2 className="text-xl font-bold text-red-500">Services</h2>
                <h2 className="text-4xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-10">
                {
                    services.map(service => <div key={service._id} className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={service.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h2 className="card-title">{service.title}</h2>
                                    <p className="text-red-500 font-semibold">Price:${service.price}</p>
                                </div>
                                <div >
                                    <button className=" text-red-500"><FaArrowRight></FaArrowRight></button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HomeServices;