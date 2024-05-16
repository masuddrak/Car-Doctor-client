import { useEffect, useState } from "react";

const useServices = (acending) => {
    const [services, setServices] = useState([])
    console.log(acending)
    useEffect(() => {
        fetch(`http://localhost:5000/services?act=${acending?"acending":"decending"}`)
            .then(res => res.json())
            .then(data => setServices(data))

            
    }, [acending])
    return services
};

export default useServices;