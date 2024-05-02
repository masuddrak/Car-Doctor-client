import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Service = ({service}) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
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
                        <Link to={`/checkout/${service._id}`} className=" text-red-500"><FaArrowRight></FaArrowRight></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;