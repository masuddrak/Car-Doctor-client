import Service from "./Service";
import useServices from "../hooks/useServices";
import { useState } from "react";
const HomeServices = () => {
   
    const [acending,setAsending]=useState(true)
    const [searcheText,setSearchText]=useState("")
    const [value, setValue] = useState("");
    const services=useServices(acending,value)
    const handelSearche=e=>{
        e.preventDefault()
        const searchValue=e.target.searcheText.value
        setSearchText(searchValue)
    }
    function updateInput(e) {  
        setValue(e.target.value);
    }  
    console.log(value)
    return (
        <div className="container mx-auto mt-24 mb-10">
            
            <div className="text-center">
                <h2 className="text-xl font-bold text-red-500">Services</h2>
                <h2 className="text-4xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div>
                <form onSubmit={handelSearche}>
                    <input value={value} onChange={updateInput} type="text" name="searcheText" id=""  className="border border-red-100"/>
                    <button className="btn bg-red-500 text-white">Search Now</button>
                </form>
            </div>
            <button onClick={()=>setAsending(!acending)} className="border border-1 bg-red-500 px-2 text-white">{acending? "Low to High":"High To Low"}</button>
            <div className="grid grid-cols-3 gap-10">
                {
                    services.map(service =><Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default HomeServices;