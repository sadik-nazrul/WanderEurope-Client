/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { FaEnvelope, FaEyeSlash, FaGoogle, FaImage, FaKey, FaRegEye, FaTwitter, FaUser } from "react-icons/fa6";
import { AuthContext } from "../providers/AuthProvider";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import Loading from "../components/Loading";


const Register = () => {
    const { googleSignIn, twitterSignIn, emailPassSignUp, logOut, loading, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    // Show password state
    const [showPassword, setShowPasword] = useState(false);
    if (loading) {
        return <Loading />
    }
    if (user) {
        return <Navigate to={location.state ? location.state : '/'} />
    }

    const handleRegister = (registerInMethod) => {
        registerInMethod()
            .then(() => {
                // logout
                logOut()
                    .then(() => navigate(location?.state ? location.state : '/login'))
                    .catch(error => toast.error(error.message));
            })
            .catch(error => {
                toast.error(error.code)
            });
    };

    // Email pass login
    const handleEmailPassRegister = e => {
        e.preventDefault();
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Password length validation
        if (password.length < 6) {
            toast.error('Password must have 6 character')
            return;
        }
        // Password uppercase validation
        else if (!/[A-Z]/.test(password)) {
            toast.error('Password Must have an Uppercase letter')
            return;
        }
        // Password lowercase validation
        else if (!/[a-z]/.test(password)) {
            toast.error('Password Must have an Lowercase letter');
            return;
        }
        emailPassSignUp(email, password)
            .then(() => {
                // Update profile
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        e.target.reset();
                    })
                    .catch(error => {
                        toast.error(error.code.replace('auth/', ''))
                    });

                // logout
                logOut()
                    .then(() => navigate(location?.state ? location.state : '/login'))
                    .catch(error => toast.error(error.message));
            })

            .catch(error => {
                toast.error(error.code.replace('auth/', ''))
            });
    }
    return (
        <div className="flex flex-col justify-center items-center lg:p-10 p-5">
            <div>
                <h2 className="text-2xl font-secondary font-semibold text-primary text-center py-4">Create Your Account</h2>
            </div>
            <form onSubmit={handleEmailPassRegister} className="space-y-4 lg:w-1/2 w-full">
                <label className="input input-bordered flex items-center gap-2">
                    <FaUser className=" opacity-50"></FaUser>
                    <input type="text" className="grow" placeholder="Name" name="name" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <FaImage className=" opacity-50"></FaImage>
                    <input type="text" className="grow" placeholder="Photo_Url" name="photo" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <FaEnvelope className=" opacity-50"></FaEnvelope>
                    <input type="email" className="grow" placeholder="Email" name="email" required />
                </label>
                <label className="relative input input-bordered flex items-center gap-2">
                    <FaKey className=" opacity-50"></FaKey>
                    <input
                        type={showPassword ? "text" : "password"}
                        className="grow"
                        placeholder="password"
                        name="password"
                    />
                    <span
                        className="absolute top-4 right-3 cursor-pointer"
                        onClick={() => { setShowPasword(!showPassword) }}>
                        {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaRegEye></FaRegEye>}
                    </span>
                </label>
                <input className="w-full cursor-pointer bg-primary py-2 text-white rounded" type="submit" value="Register" />
            </form>
            <div className="pt-4">
                <p>If you have an account! <Link to='/login' className="text-primary underline font-semibold">Login</Link></p>
            </div>
            <div className="flex items-center justify-center gap-4 py-4">
                <button onClick={() => handleRegister(googleSignIn)} className="px-5 py-2 bg-primary text-white flex items-center gap-2 rounded">
                    <FaGoogle />Google
                </button>
                <button onClick={() => handleRegister(twitterSignIn)} className="px-5 py-2 bg-primary text-white flex items-center gap-2 rounded">
                    <FaTwitter />Twitter
                </button>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
            ></ToastContainer>
        </div>
    );
};

export default Register;