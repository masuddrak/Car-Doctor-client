import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Prvider/AuthProvider";
import CheckOutTable from "../components/CheckOutTable";


const MyBookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBooking] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/checkout?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBooking(data)
            })
    }, [user])
    const handelDeleteBookig = (id) => {
        fetch(`http://localhost:5000/checkout/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    const updateBookItem=bookings.filter(booking=>booking._id !=id)
                    setBooking(updateBookItem)
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
                                bookings.map(bookig => <CheckOutTable key={bookig._id} bookig={bookig} handelDeleteBookig={handelDeleteBookig}></CheckOutTable>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;