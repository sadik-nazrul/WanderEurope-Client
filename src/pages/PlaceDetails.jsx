import { FaDollarSign } from "react-icons/fa";
import { FaCalendar, FaMapLocation, FaUsers } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";


const PlaceDetails = () => {
    const loadPlace = useLoaderData();
    console.log(loadPlace);
    const { thumb, spotName, country, location, cost, seasonality, time, visitor, shortDesc } = loadPlace;
    return (
        <div className="grid lg:grid-cols-4 gap-5 container mx-auto lg:py-10 p-5">
            <div className="lg:col-span-3 border p-5 rounded">
                <div className="flex justify-between pb-4">
                    <h2 className="text-2xl font-bold text-primary">{spotName}</h2>
                    <p className="flex items-center"><FaDollarSign></FaDollarSign><span className="font-bold">{cost} (Per Day)</span></p>
                </div>
                <div className="relative">
                    <img className="shadow rounded-xl max-w-full w-full" src={thumb} alt={spotName} />
                    <p className=" absolute top-4 right-4 px-5 py-2 bg-primary rounded-lg text-white">{country}</p>
                </div>
                <div className="flex justify-between py-4">
                    <p className="flex items-center gap-1"><FaMapLocation /><span className=" font-medium hover:underline cursor-pointer">{location}</span></p>
                    <p><span className=" font-semibold">Best Season for Travel: </span><span>{seasonality}</span></p>
                </div>

                <div className="flex justify-between py-4">
                    <p className="flex items-center gap-1"><FaCalendar /><span className=" font-medium hover:underline cursor-pointer">{time}</span></p>

                    <p className="flex items-center gap-1"><FaUsers /><span className=" font-medium hover:underline cursor-pointer">{visitor}</span></p>
                    
                </div>
                <p><span className=" font-semibold">Details: </span>{shortDesc}</p>
            </div>


            <div className="border rounded p-5">
                <h2 className="text-2xl font-bold text-primary pb-4">Give Your Feedback</h2>
                <form className="space-y-4">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Name" name="name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="email" className="grow" placeholder="Email" name="email" required />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="number" className="grow" placeholder="+087674982374" />
                    </label>
                    <textarea
                        placeholder="FeedBack"
                        className="textarea textarea-bordered textarea-sm w-full max-w-xs">
                    </textarea>
                    <input className="px-5 py-2 bg-primary text-white font-semibold rounded cursor-pointer" type="submit" value="Submit" />
                </form>

            </div>
        </div>
    );
};

export default PlaceDetails;