import { useLoaderData } from "react-router-dom";


const BlogDetails = () => {
    const loadedBlog = useLoaderData();
    const { featured_img, title, content } = loadedBlog;
    return (
        <div>
            <div className="container mx-auto lg:py-10 p-5 grid lg:grid-cols-3 gap-5">
                <div className="col-span-2 space-y-2 p-5 shadow shadow-primary rounded">
                    <img className=" max-w-full max-h-full w-full object-cover rounded" src={featured_img} alt={title} />
                    <h2 className=" text-xl font-bold">{title}</h2>
                    <div>
                        <p className=" text-justify">{content}</p>
                    </div>
                </div>

                <div className="border rounded p-5">
                    <h2 className="text-2xl font-bold text-primary pb-4">Give Your Feedback</h2>
                    <form className="space-y-4">
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Name" name="name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="email" className="grow" placeholder="Email" name="email" required />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="number" className="grow" placeholder="+087674982374" />
                        </label>
                        <textarea
                            placeholder="FeedBack"
                            className="textarea textarea-bordered textarea-sm w-full max-w-xs">
                        </textarea>
                        <input className="px-5 py-2 bg-primary text-white font-semibold rounded cursor-pointer" type="submit" value="Submit" />
                    </form>

                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default BlogDetails;