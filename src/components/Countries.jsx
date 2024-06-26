import Country from "./Country";
import PropTypes from 'prop-types';

const Countries = ({countries}) => {
    
    return (
        <div className="grid lg:grid-cols-3 gap-5 container mx-auto lg:py-10 p-5">
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