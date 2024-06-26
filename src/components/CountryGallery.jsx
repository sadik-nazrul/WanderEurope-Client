import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const CountryGallery = () => {
    // Countries
    const [coutries, setCoutries] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5007/countries')
            .then(res => res.json())
            .then(data => {
                setCoutries(data);
            })
    }, []);

    return (
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-4 lg:py-10 p-5">
                {
                    coutries.map(cntr => <Link to={`places/`} className="relative" key={cntr._id}>
                        <img className="max-w-full w-full h-60 object-cover rounded-xl" src={cntr.countryImage} alt={cntr.countryName} />
                        <div className="bg-[#c0cbcddf] absolute bottom-2 m-5 p-5 text-secondary rounded-xl">
                            <h2 className="text-xl font-semibold">{cntr.countryName}</h2>
                            <p>{cntr.countryInfo}</p>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default CountryGallery;