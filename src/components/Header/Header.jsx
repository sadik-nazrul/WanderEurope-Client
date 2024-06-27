import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './header.css'
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaAlignLeft, FaAlignRight, FaCircleUser } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { Tooltip } from "react-tooltip";


const Header = () => {
    // Context
    const { user, logOut } = useContext(AuthContext);

    // Header scrolling animation state
    const [scrolling, setScrolling] = useState(false);

    // Header scrolling animation effect
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Header scrolling animation function
    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    // User LogOut
    const userLogout = () => {
        logOut()
            .then()
            .catch(error => {
                const code = error.code;
                const rePlace = code.replace('auth/', '');
                toast.error(rePlace);
            });
    }

    // Theme change
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme])
    const handleThemeChange = e => {
        if (e.target.checked) {
            setTheme('night')
        }
        else {
            setTheme('light')
        }
    }
    const links = <>
        <li>
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'bg-primary px-5 py-2 rounded text-white' : ''
                } to='/'>Home
            </NavLink>
        </li>
        <li>
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'bg-primary px-5 py-2 rounded text-white' : ''
                } to='/toures'>All Places
            </NavLink>
        </li>
        <li>
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'bg-primary px-5 py-2 rounded text-white' : ''
                } to='/blogs'>Blogs
            </NavLink>
        </li>
    </>

    const userLinks = <>
        <li>
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'bg-primary px-5 py-2 rounded text-white' : ''
                } to={`myplaces/user/${user?.displayName}`}>My places
            </NavLink>
        </li>
        <li>
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'bg-primary px-5 py-2 rounded text-white' : ''
                } to='/addplaces'>Add places
            </NavLink>
        </li>
        <li>
            <Link
                onClick={userLogout}
                to='/'>
                Logout
            </Link>
        </li>
    </>
    return (
        <div className={scrolling ? `navbar-scroll navbar lg:px-20 sticky top-0` : `navbar lg:px-20 sticky top-0 z-[99] shadow`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaAlignLeft size={25} />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-secondary text-white mt-3 z-[1] p-2 shadow shadow-primary rounded-box w-52">
                        {links}
                        <li className="flex items-start">
                            <label className="swap swap-rotate">

                                {/* this hidden checkbox controls the state */}
                                <input onChange={handleThemeChange} type="checkbox" className="theme-controller" />

                                {/* sun icon */}
                                <CiLight className="swap-off fill-current w-10 h-10" />


                                {/* moon icon */}
                                <MdDarkMode className="swap-on fill-current w-10 h-10" />

                            </label>
                        </li>
                    </ul>
                </div>
                <Link className="text-lg font-bold" to='/'>WanderEurope</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-4">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                {
                    user ? <>

                        <img
                            className="user-image w-10 rounded-full object-cover"
                            src={user?.photoURL} alt={user?.displayName}
                        />
                        <Tooltip
                            anchorSelect=".user-image"
                            content={user.displayName}
                            offset="20"
                            float={true}
                        />

                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost">
                                <FaAlignRight size={25} />
                            </div>
                            <ul tabIndex={0} className="dropdown-content w-44 bg-secondary text-white shadow shadow-primary p-5 right-2 top-16 rounded-lg flex flex-col gap-4">
                                {userLinks}
                            </ul>
                        </div>
                    </> :
                        <>
                            <Link to='/login' className="login">
                                <FaCircleUser size={30} />
                            </Link>
                            <Tooltip
                                anchorSelect=".login"
                                content="LogIn"
                                offset="20"
                                place="bottom"
                            />
                        </>
                }

                {/* Theme controller */}
                <div className="hidden lg:block theme">
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input onChange={handleThemeChange} type="checkbox" className="theme-controller" />

                        {/* sun icon */}
                        <CiLight className="swap-off fill-current w-10 h-10" />


                        {/* moon icon */}
                        <MdDarkMode className="swap-on fill-current w-10 h-10" />

                    </label>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
            ></ToastContainer>
        </div>
    );
};

export default Header;