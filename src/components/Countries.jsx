import Country from "./Country";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Countries = ({ countries }) => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="grid lg:grid-cols-3 gap-5 container mx-auto lg:py-10 p-5"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="20"
            data-aos-duration="1000"
        >
            {
                countries.map(cntry => <Country key={cntry._id} cntry={cntry} />)
            }
        </div>
    );
};

Countries.propTypes = {
    countries: PropTypes.array,
    places: PropTypes.array
}

export default Countries;