import { useEffect, useState } from "react";
import Blog from "./Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://wandereurope-server.vercel.app/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
    return (
        <div>
            <div>
                <h2 className="text-3xl font-secondary text-center">Our Latest Blogs</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-5 container mx-auto lg:py-10 p-5">
            {
                blogs.map(blog => <Blog key={blog._id} blog={blog} />)
            }
        </div>
        </div>
    );
};

export default Blogs;