/* eslint-disable react/no-unescaped-entities */
import { Link, useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import Countries from "../components/Countries";
import TouristSpots from "../components/TouristSpots";
import mountain from '../assets/mountain.svg'
import plain from '../assets/plain.svg'
import Blogs from "../components/Blogs";



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

            <div className="lg:py-10 p-5">
                <Blogs />
            </div>

            <div className="lg:py-10 p-5">
                <div className="bg-primary container mx-auto rounded-xl p-5 grid lg:grid-cols-5 items-center">
                    <div className="lg:col-span-3 flex lg:flex-row flex-col gap-4">
                        <img className="max-w-full w-20 lg:w-fit text-center" src={mountain} alt="Mountain" />
                        <div>
                            <h2 className="text-white text-xl font-semibold">Ready to adventure and enjoy natural</h2>
                            <p>Discover thrilling escapades and immerse yourself in nature's beauty with our exhilarating and unforgettable adventures.</p>
                        </div>
                    </div>
                    <img className=" max-w-full" src={plain} alt="Plain" />
                    <Link to='toures' className="py-3 bg-white text-primary font-semibold rounded text-center">Let's Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;