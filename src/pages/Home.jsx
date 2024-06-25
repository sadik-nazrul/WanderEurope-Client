import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import Place from "../components/Place";
import { useState } from "react";


const Home = () => {
    
    const loadPlaces = useLoaderData();
    const [places, setPlaces] = useState(loadPlaces)
    
    return (
        <div>
            <Hero />
            <div className="grid grid-cols-4 gap-5 container mx-auto lg:py-10 p-5">
                {
                    places.map(place => <Place
                        key={place._id}
                        place={place}
                        places={places}
                        setPlaces={setPlaces}
                    />)
                }
            </div>
        </div>
    );
};

export default Home;