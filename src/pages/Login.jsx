/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { FaEnvelope, FaEyeSlash, FaGoogle, FaKey, FaRegEye, FaTwitter } from "react-icons/fa6";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AllreadyLogin from "./AllreadyLogin";

const Login = () => {
    const { googleSignIn, twitterSignIn, emailPassSignIn, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    // Show password state
    const [showPassword, setShowPasword] = useState(false);

    // Google and Twitter Login
    const handleLogin = (signInMethod) => {
        signInMethod()
            .then(() => {
                // Navigate
                navigate(location?.state ? location?.state : '/');
            })
            .catch();
    };

    // Email pass login
    const handleEmailPassLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        emailPassSignIn(email, password)
            .then(() => {
                e.target.reset();

                // Navigate
                navigate(location?.state ? location?.state : '/');
            })
            .catch(error => {
                const code = error.code;
                const rePlace = code.replace('auth/', '');
                toast.error(rePlace);
                e.target.reset();
            })
    }
    return (
        <div className="flex flex-col justify-center items-center lg:p-10 p-5">
            {
                user ? <AllreadyLogin></AllreadyLogin> : <>
                    <div>
                        <h2 className="text-2xl font-secondary font-semibold text-primary text-center py-4">Login Your Account</h2>
                    </div>
                    <form onSubmit={handleEmailPassLogin} className="space-y-4 lg:w-1/2 w-full">
                        <label className="input input-bordered flex items-center gap-2">
                            <FaEnvelope className=" opacity-50"></FaEnvelope>
                            <input type="text" className="grow" placeholder="Email" name="email" />
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
                        <input className="w-full bg-primary py-2 text-white rounded cursor-pointer" type="submit" value="Login" />
                    </form>
                    <div className="pt-4">
                        <p>If you don't have any account! <Link to='/register' className="text-primary underline font-semibold">Register</Link></p>
                    </div>
                    <div className="flex items-center justify-center gap-4 py-4">
                        <button onClick={() => handleLogin(googleSignIn)} className="px-5 py-2 bg-primary text-white flex items-center gap-2 rounded">
                            <FaGoogle />Google
                        </button>
                        <button onClick={() => handleLogin(twitterSignIn)} className="px-5 py-2 bg-primary text-white flex items-center gap-2 rounded">
                            <FaTwitter />Twitter
                        </button>
                    </div>
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                    ></ToastContainer>
                </>
            }
        </div>
    );
};

export default Login;
