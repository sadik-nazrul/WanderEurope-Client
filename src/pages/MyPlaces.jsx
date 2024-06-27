import { useState } from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyPlaces = () => {
    const loadedPlace = useLoaderData();
    const [places, setPlaces] = useState(loadedPlace);

    // Delete handler
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://wandereurope-server.vercel.app/places/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                            const remaining = places.filter(place => place._id !== _id);
                            setPlaces(remaining);
                        }
                    })
            }
        });
    }
    
    return (
        <div>
            {
                places.length > 0 ? (
                    <div className="container mx-auto lg:py-10 p-5 overflow-scroll">
                        <table className="w-full">
                            <thead>
                                <tr className="border border-primary bg-primary py-2 text-white">
                                    <th className="w-[10%] py-4 border-r text-xs lg:text-lg">Serial</th>
                                    <th className="w-[20%] py-4 border-r text-xs lg:text-lg">Name</th>
                                    <th className="w-[20%] py-4 border-r text-xs lg:text-lg">Country</th>
                                    <th className="w-[20%] py-4 border-r text-xs lg:text-lg">Cost (Per Day)</th>
                                    <th className="w-[10%] py-4 border-r text-xs lg:text-lg">Edit</th>
                                    <th className="w-[10%] py-4 text-xs lg:text-lg">Delete</th>
                                </tr>
                            </thead>
                            {
                                places.map((place, indx) => (
                                    <tbody key={place._id}>
                                        <tr className="border">
                                            <th className="border-r">{indx + 1}</th>
                                            <td className="border-r lg:px-5 px-2 py-2 text-xs lg:text-lg">{place.spotName}</td>
                                            <td className="border-r lg:px-5 px-2 py-2 text-xs lg:text-lg">{place.country}</td>
                                            <td className="border-r lg:px-5 px-2 py-2 text-xs lg:text-lg">{place.cost}</td>
                                            <td className="border-r lg:px-5 px-2 py-2 text-xs lg:text-lg">
                                                <Link to={`${place._id}`}>
                                                    <FaPencil />
                                                </Link>
                                            </td>
                                            <td className="px-5 py-2">
                                                <FaTrash className="cursor-pointer" onClick={() => handleDelete(place._id)} />
                                            </td>
                                        </tr>
                                    </tbody>
                                ))
                            }
                        </table>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4 lg:py-10 justify-center items-center">
                        <h2>You are not added any places</h2>
                        <Link to='/addplaces' className="px-5 py-2 rounded bg-primary text-white font-semibold">
                            Add places Now
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default MyPlaces;
