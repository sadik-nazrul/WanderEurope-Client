import { FaPencil, FaTrash } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";


const MyPlaces = () => {
    const loadedPlace = useLoaderData();
    console.log(loadedPlace);
    // Delete handler
    const handleDelete = id => {
        fetch(`http://localhost:5007/places/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className="container mx-auto lg:py-10 p-5">
            <table className="w-full">
                <thead>
                    <tr className="border border-primary bg-primary py-2 text-white">
                        <th className="w-[10%] py-4 border-r">Serial</th>
                        <th className="w-[20%] py-4">Name</th>
                        <th className="w-[20%] py-4 border-r">Country</th>
                        <th className="w-[20%] py-4 border-r">Cost (Per Day)</th>
                        <th className="w-[10%] py-4 border-r">Edit</th>
                        <th className="w-[10%] py-4">Delete</th>
                    </tr>
                </thead>
                {
                    loadedPlace.map((place, indx) => <tbody key={place._id}>
                        <tr className="border">
                            <th className="border-r">{indx + 1}</th>
                            <td className="border-r px-5 py-2">{place.spotName}</td>
                            <td className="border-r px-5 py-2">{place.country}</td>
                            <td className="border-r px-5 py-2">{place.cost}</td>
                            <td className="border-r px-5 py-2"><Link to={`${place._id}`}><FaPencil /></Link></td>
                            <td className="px-5 py-2"><FaTrash className="cursor-pointer" onClick={()=> handleDelete(place._id)} /></td>
                        </tr>
                    </tbody>)
                }
            </table>
        </div>
    );
};

export default MyPlaces;