import { useContext } from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaCalendar, FaFile, FaFlag, FaImage, FaLocationDot } from "react-icons/fa6";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'


const AddPlaces = () => {
    const { user } = useContext(AuthContext);

    // Form handler
    const handleAddPlace = e => {
        e.preventDefault();
        const form = e.target;
        const thumb = form.thumb.value;
        const spotName = form.spotName.value;
        const country = form.country.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const time = form.time.value;
        const visitor = form.visitor.value;
        const shortDesc = form.shortDesc.value;
        const userEmail = user.email;
        const userName = user.displayName;

        const addPlace = { thumb, spotName, country, location, cost, seasonality, time, visitor, shortDesc, userEmail, userName };
        console.log(addPlace);

        fetch('https://wandereurope-server.vercel.app/places', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addPlace)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Great Job!",
                        text: "Your Place Successfully added",
                        icon: "success"
                    });
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="lg:p-10 p-5 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold font-secondary py-5 text-center text-primary">Add Your Place</h2>
            <form
                onSubmit={handleAddPlace}
                className="lg:w-3/4 w-full">
                <div className="grid grid-cols-2 gap-4 py-2">
                    <label className="input input-bordered flex items-center gap-2">
                        <FaImage className="opacity-50"></FaImage>
                        <input type="text" className="grow" placeholder="Image Url" name="thumb" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Tourists Spot Name" name="spotName" />
                    </label>
                </div>

                <div className="grid grid-cols-2 gap-4 py-2">
                    <label className="input input-bordered flex items-center gap-2">
                        <FaFlag className="opacity-50"></FaFlag>
                        <input type="text" className="grow" placeholder="country" name="country" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <FaLocationDot className="opacity-50"></FaLocationDot>
                        <input type="text" className="grow" placeholder="location" name="location" />
                    </label>
                </div>

                <div className="grid grid-cols-2 gap-4 py-2">
                    <label className="input input-bordered flex items-center gap-2">
                        <FaDollarSign className="opacity-50"></FaDollarSign>
                        <input type="text" className="grow" placeholder="Average Cost" name="cost" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Summer, Winter" name="seasonality" />
                    </label>
                </div>

                <div className="grid grid-cols-2 gap-4 py-2">
                    <label className="input input-bordered flex items-center gap-2">
                        <FaCalendar className="opacity-50"></FaCalendar>
                        <input type="text" className="grow" placeholder="& days" name="time" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="10000+ per year" name="visitor" />
                    </label>
                </div>

                <label className="my-2 input input-bordered flex items-center gap-2">
                    <FaFile className="opacity-50"></FaFile>
                    <input type="text" className="grow" placeholder="short description" name="shortDesc" />
                </label>

                <input className="w-full my-2 py-2 rounded bg-primary text-white font-semibold cursor-pointer" type="submit" value="Add Place" />
            </form>
        </div>
    );
};

export default AddPlaces;