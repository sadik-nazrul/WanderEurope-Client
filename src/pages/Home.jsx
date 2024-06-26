import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import Place from "../components/Place";


const Home = () => {
    
    const loadPlaces = useLoaderData();
    
    
    return (
        <div>
            <Hero />
            <div className="grid grid-cols-4 gap-5 container mx-auto lg:py-10 p-5">
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

export default Home;