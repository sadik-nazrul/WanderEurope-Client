import { Link, useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import Countries from "../components/Countries";
import TouristSpots from "../components/TouristSpots";



const Home = () => {
    const countries = useLoaderData();


    return (
        <div>
            <Hero />
            <div className="lg:py-10 p-5 flex flex-col items-center">
                <h2 className="text-3xl font-secondary font-medium">Top Tourist Spots in Europe</h2>
                <TouristSpots />
                <Link to='/toures' className="px-5 py-2 bg-primary rounded text-white font-semibold">See All Spots</Link>
            </div>
            <div className="lg:py-10 p-5 flex flex-col items-center">
            <h2 className="text-3xl font-secondary font-medium">Popular Coutries for Travel in Europe</h2>
                <Countries countries={countries} />
            </div>

        </div>
    );
};

export default Home;