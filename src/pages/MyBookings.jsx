import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Prvider/AuthProvider";
import CheckOutTable from "../components/CheckOutTable";
import axios from "axios";


const MyBookings = () => {
    const { user } = useContext(AuthContext)
    console.log(user?.email)
    const [bookings, setBooking] = useState([])
    useEffect(() => {
        // fetch(`http://localhost:5000/checkoutEmail?email=${user?.email}`,{withCredentials:true})
        //     .then(res => res.json())
        //     .then(data => {
        //         setBooking(data)
        //     })
        axios.get(`http://localhost:5000/checkoutEmail?email=${user?.email}`,{withCredentials:true})
        .then(res=>{
            setBooking(res.data)
        })
    }, [user])
    const handelDeleteBookig = (id) => {
        fetch(`http://localhost:5000/checkout/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const updateBookItem = bookings.filter(booking => booking._id != id)
                    setBooking(updateBookItem)
                    
                }

            })
    }
    const handelStaus = (id) => {
        fetch(`http://localhost:5000/checkout/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status: "Confirem" })
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    const remainingService=bookings.filter(booking=>booking._id !==id)
                    const updateService=bookings.find(bookig=>bookig._id===id)
                    updateService.status="Confirem"
                    const newBookings=[updateService,...remainingService]
                    setBooking(newBookings)
                }

            })
    }
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold"> My Booking {bookings.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Service</th>
                                <th>Price</th>
                                <th>Staus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                bookings.map(bookig => <CheckOutTable key={bookig._id} bookig={bookig} handelDeleteBookig={handelDeleteBookig} handelStaus={handelStaus}></CheckOutTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;