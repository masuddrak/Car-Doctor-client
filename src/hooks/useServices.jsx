import { useEffect, useState } from "react";

const useServices = (acending, searcheText) => {
    const [services, setServices] = useState([])
    console.log(searcheText)
    useEffect(() => {
        fetch(`http://localhost:5000/services?act=${acending ? "acending" : "decending"}&search=${searcheText}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [acending, searcheText])
    return services
};

export default useServices;