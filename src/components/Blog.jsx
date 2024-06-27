import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = ({ blog }) => {
    const { _id, featured_img, title } = blog;
    // AOS initialize
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='shadow shadow-primary space-y-2 p-5 rounded-lg'
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="20"
            data-aos-duration="1000"
        >
            <img className=' max-w-full h-52 object-cover w-full rounded' src={featured_img} alt={title} />
            <div className='flex flex-col gap-4'>
                <h2 className='text-xl font-semibold grow'>{title}</h2>
                <Link className='text-center text-white font-semibold rounded px-5 py-2 bg-primary' to={`blog/${_id}`}>View Details</Link>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object
}
export default Blog;