import { useEffect, useState } from "react";
import Place from "./Place";


const TouristSpots = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('https://wandereurope-server.vercel.app/places/')
        .then(res => res.json())
        .then(data => setPlaces(data))
    },[]);
    const somePlaces = places.slice(0, 4);
    console.log(somePlaces);
    return (
        <div className="grid lg:grid-cols-4 gap-5 container mx-auto lg:py-10 p-5">
            {
                somePlaces.map(place => <Place
                    key={place._id}
                    place={place}
                />)
            }
        </div>
    );
};

export default TouristSpots;