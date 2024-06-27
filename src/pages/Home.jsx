import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import Countries from "../components/Countries";



const Home = () => {
    const countries = useLoaderData();
    // AOS initialize
    
    
    return (
        <div>
            <Hero />
            <div>
                <Countries countries={countries} />
            </div>
        </div>
    );
};

export default Home;