import { FaEnvelopeOpenText, FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaPaperPlane, FaPhone, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="py-10 bg-secondary text-white">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-3 gap-4 pb-4 p-5">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold">WanderEurope</h2>
                        <p>At WanderEurope, we curate unique and memorable tours across Europe’s iconic and hidden gems, ensuring an unforgettable travel experience.</p>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <FaEnvelopeOpenText className="text-primary" />
                                <a href="mailto:info@wandereurope.com">info@wandereurope.com</a>
                            </div>

                            <div className="flex items-center gap-2">
                                <FaPhone className="text-primary" />
                                <a href="tel:0124313441412">0124313441412</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaLocationDot className="text-primary" />
                                <a href="https://maps.app.goo.gl/kESeUPTzTS2bzLdV7" target="_blank" rel="noopener noreferrer">6391 Elgin St. Celina, NYC 10299</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold pb-3">Importents Links</h2>
                        <div className="flex gap-2 flex-col pl-2">
                            <Link className="hover:underline" to='/blogs'>Blogs</Link>
                            <Link className="hover:underline" to='/terms'>Terms and conditions</Link>
                            <Link className="hover:underline" to='/privacy'> Privacy policy</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-semibold">Newsletter</h2>
                        <p>Subscribe our newsletter for Get Update</p>
                        <div className="flex items-center relative flex-grow">
                            <input type="email" className="border p-2 w-full rounded" placeholder="examlple@email.com" />
                            <FaPaperPlane className=" cursor-pointer absolute right-3 text-primary" />
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaFacebook size={25}  className="text-primary" />
                            <FaTwitter size={25}   className="text-primary" />
                            <FaInstagram size={25} className="text-primary" />
                            <FaLinkedin size={25}  className="text-primary" />
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="py-4 border-t">
                <p className="text-center">Copyright @ all Right Reseved <a className="underline" href="http://sadiknazrul.com" target="_blank" rel="noopener noreferrer">Sadik Nazrul</a></p>
            </div>
            </div>
        </div>
    );
};

export default Footer;