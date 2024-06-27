import { useLoaderData } from "react-router-dom";
import Place from "../components/Place";




const AllPlaces = () => {
    const loadPlaces = useLoaderData();
    return (
        <div>
            <div className="flex justify-center items-center lg:py-20 py-10 border-b shadow text-primary">
                <h2 className="lg:text-4xl text-2xl font-bold">Take a look At Our Tours</h2>
            </div>
            <div className="grid lg:grid-cols-4 gap-5 container mx-auto lg:py-10 p-5">
                {
                    loadPlaces.map(place => <Place
                        key={place._id}
                        place={place}
                    />)
                }
            </div>
            
        </div>
    );
};

export default AllPlaces;