import { useLoaderData, useParams } from "react-router-dom";
import Place from "../components/Place";


const PlaceBycountry = () => {
    const loadedPlace = useLoaderData();
    const cntryName = useParams();

    return (
        <div>
            <div className="flex justify-center items-center lg:py-10 p-5 border-b">
                <h2 className="lg:text-4xl text-2xl font-bold">{cntryName.countryname}</h2>
            </div>
            <div className="grid lg:grid-cols-4 gap-5 container mx-auto lg:py-10 p-5">
                {
                    loadedPlace.map(place => <Place key={place._id} place={place} />)
                }
            </div>
        </div>
    );
};

export default PlaceBycountry;