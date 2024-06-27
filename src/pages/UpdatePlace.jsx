import { FaDollarSign, FaFile, FaFlag, FaImage, FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";


const UpdatePlace = () => {
    const loadPlace = useLoaderData();
    const { _id, thumb, spotName, country, location, cost, seasonality, time, visitor, shortDesc } = loadPlace;
    const navigate = useNavigate();

    const handleUpdatePlace = e => {
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

        const updatePlace = { thumb, spotName, country, location, cost, seasonality, time, visitor, shortDesc };
        console.log(updatePlace);

        fetch(`https://wandereurope-server.vercel.app/updateplace/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatePlace)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    Swal.fire({
                        title: "Great Job!",
                        text: "Your Place Successfully Updated",
                        icon: "success"
                      });
                      navigate('/toures')
                }
                
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: {err},
                  });
            })
    }
    return (
        <div className="lg:p-10 p-5 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold font-secondary py-5 text-center text-primary">Add Your Place</h2>
            <form
                onSubmit={handleUpdatePlace}
                className="lg:w-3/4 w-full">
                <div className="grid grid-cols-2 gap-4 py-2">
                    <label className="input input-bordered flex items-center gap-2">
                        <FaImage className="opacity-50"></FaImage>
                        <input type="text" className="grow" placeholder="Image Url" name="thumb" defaultValue={thumb} />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Tourists Spot Name" name="spotName" defaultValue={spotName} />
                    </label>
                </div>

                <div className="grid grid-cols-2 gap-4 py-2">
                    <label className="input input-bordered flex items-center gap-2">
                        <FaFlag className="opacity-50"></FaFlag>
                        <input type="text" className="grow" placeholder="country" name="country" defaultValue={country} />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <FaLocationDot className="opacity-50"></FaLocationDot>
                        <input type="text" className="grow" placeholder="location" name="location" defaultValue={location} />
                    </label>
                </div>

                <div className="grid grid-cols-2 gap-4 py-2">
                    <label className="input input-bordered flex items-center gap-2">
                        <FaDollarSign className="opacity-50"></FaDollarSign>
                        <input type="text" className="grow" placeholder="Average Cost" name="cost" defaultValue={cost} />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Summer, Winter" name="seasonality" defaultValue={seasonality} />
                    </label>
                </div>

                <div className="grid grid-cols-2 gap-4 py-2">
                    <label className="input input-bordered flex items-center gap-2">
                        <FaDollarSign className="opacity-50"></FaDollarSign>
                        <input type="text" className="grow" placeholder="Average Cost" name="time" defaultValue={time} />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Summer, Winter" name="visitor" defaultValue={visitor} />
                    </label>
                </div>

                <label className="my-2 input input-bordered flex items-center gap-2">
                    <FaFile className="opacity-50"></FaFile>
                    <input type="text" className="grow" placeholder="short description" name="shortDesc" defaultValue={shortDesc} />
                </label>

                <input className="w-full my-2 py-2 rounded bg-primary text-white font-semibold cursor-pointer" type="submit" value="Update Place" />
            </form>
        </div>
    );
};

export default UpdatePlace;