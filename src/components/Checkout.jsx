import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Prvider/AuthProvider";


const Checkout = () => {
    const { user, loader } = useContext(AuthContext)

    const loaderData = useLoaderData()
    console.log(loaderData)
    const handelCheckOut = (e) => {
        e.preventDefault()
        const from = e.target
        const service_id = loaderData?._id
        const service_title = loaderData?.title
        const name = from.name.value
        const date = from.date.value
        const email = from.email.value
        const price = from.price.value
        const message = from.message.value
        const checkOutInfo = { name, email, price, date, message, service_id, service_title }
        fetch("http://localhost:5000/checkout/", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(checkOutInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        console.log(checkOutInfo)
    }
    if (loader) {
        return <h1>loder...</h1>
    }
    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold my-4">{loaderData.title}</h2>
            <form onSubmit={handelCheckOut} noValidate="" action="" className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600"> Name</label>
                        <input type="text" name="name" placeholder="Your  Name" className="w-full px-4 py-3 rounded-md border outline-0" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Service Date</label>
                        <input type="date" name="date" placeholder="Your Last Name" className="w-full px-4 py-3 rounded-md border outline-0" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Email</label>
                        <input type="email" name="email" defaultValue={user?.email} className="w-full px-4 py-3 rounded-md border outline-0" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Price</label>
                        <input type="number" name="price" defaultValue={loaderData?.price} readOnly className="w-full px-4 py-3 rounded-md border outline-0" />
                    </div>

                </div>
                <div className="space-y-1 text-sm">
                    <label className="block dark:text-gray-600">Message</label>
                    <textarea type="text" name="message" rows="5" placeholder="Youre Message..." className="w-full px-4 py-3 rounded-md border outline-0" />
                </div>
                <div>
                    <button className="block  p-3 text-center w-1/4 rounded-sm bg-red-500 text-white">Checkout</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;