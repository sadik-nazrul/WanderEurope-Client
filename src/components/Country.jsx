import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({ cntry }) => {
    const { countryName, countryImage, countryInfo } = cntry;

    return (
        <div>
            <Link to={`places/place/${countryName}`}>
                <div className='relative'>
                    <img className='h-72 object-cover max-w-full w-full rounded-lg' src={countryImage} alt={countryName} />
                    <div className='absolute bottom-4 left-5 bg-[#dbe1e3cc] p-4 right-2 rounded-xl text-secondary space-y-2'>
                        <h2 className='text-xl font-semibold'>{countryName}</h2>
                        <p>{countryInfo}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};
Country.propTypes = {
    cntry: PropTypes.object,
    place: PropTypes.object
}
export default Country;