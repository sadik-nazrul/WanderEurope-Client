import PropTypes from 'prop-types';
import { FaDollarSign } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';


const Place = ({ place }) => {

    // AOS initialize
    useEffect(() => {
        AOS.init();
    }, [])

    // places distructure
    const { _id, thumb, spotName, country, cost } = place;
    return (
        <div className='flex flex-col gap-2 rounded-xl p-5 shadow shadow-primary'
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="20"
            data-aos-duration="1000"
        >

            <div className='relative'>
                <img className='max-w-full w-full h-40 object-cover' src={thumb} alt={spotName} />

                <p className='absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded'>{country}</p>
            </div>
            <h2 className='text-xl font-semibold'>{spotName}</h2>
            <div className='flex justify-between py-2 flex-grow'>
                <p className='flex items-center'><FaDollarSign /> <span>{cost} (per day)</span></p>
            </div>
            <Link
                className='flex items-center justify-center rounded gap-2 px-4 py-1 bg-secondary text-white'
                to={`/places/${_id}`}>
                <span>View Details</span>
                <FaArrowAltCircleRight size={20} />
            </Link>

            
        </div>
    );
};
Place.propTypes = {
    place: PropTypes.object,
}
export default Place;