import { useNavigate } from "react-router-dom";


const AllreadyLogin = () => {
    const navigate = useNavigate()
    return (
        <section className='bg-white '>
            <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
                <div className='flex flex-col items-center max-w-sm mx-auto text-center'>
                    <h2 className="text-2xl font-bold pb-4">
                        You Are Loged In
                    </h2>
                    <button className="px-5 py-2 bg-primary text-white rounded" onClick={() => navigate('/')}>Back to Home</button>
                </div>
            </div>
        </section>
    );
};

export default AllreadyLogin;