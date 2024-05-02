

const CheckOutTable = ({bookig,handelDeleteBookig}) => {
    const {_id,price,title}=bookig
    return (
        <tr>
            <th>{_id}</th>
            <td>{title}</td>
            <td>{price}</td>
            <td className="flex gap-3">
                <button className="bg-warning text-white px-3 py-1">Pending</button>
                <button onClick={()=>handelDeleteBookig(_id)} className="bg-red-500 text-white px-3 py-1">Delete</button>
            </td>
        </tr>
    );
};

export default CheckOutTable;