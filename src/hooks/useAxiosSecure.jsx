import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
})
const useAxiosSecure = () => {
    const { logOut, setLoader } = useAuth()
    const naviget = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                logOut()
                    .then(() => {
                        naviget("/login")
                        setLoader(false)
                    })
                    .catch(error => console.log(error))
            }
        });
    }, [])
    return axiosSecure;
};

export default useAxiosSecure;