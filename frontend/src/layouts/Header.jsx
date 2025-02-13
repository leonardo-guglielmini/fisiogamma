import { useLocation, Link, NavLink } from "react-router-dom"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/logo-fisiogamma.png"

export default function Header() {

    const location = useLocation();
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const fadeInOut = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, x: 100, transition: { duration: 0.3 } }
    }
    return (
        <div className={`py-5 relative shadow-md bg-(--bg)`}>
            <div className={`container mx-auto flex justify-between items-center`}>
                <Link to="/"><img src={logo} alt="logo" /></Link>
                {location.pathname !== "/" &&
                    <div>
                        <div className="gap-2 uppercase text-white font-bold hidden xl:flex">

                            <NavLink to="/" className={({ isActive }) => `py-3 px-5 bg-(--accent) rounded-md shadow-sm hover:bg-(--hover) transition duration-500 ease-in-out ${isActive ? "bg-(--hover)" : null}`}>Home</NavLink>

                            <NavLink to="/services" className={({ isActive }) => `py-3 px-5 bg-(--accent) rounded-md shadow-sm hover:bg-(--hover) transition duration-500 ease-in-out ${isActive ? "bg-(--hover)" : null}`}>Servizi</NavLink>

                            <NavLink to="/contact" className={({ isActive }) => `py-3 px-5 bg-(--accent) rounded-md shadow-sm hover:bg-(--hover) transition duration-500 ease-in-out ${isActive ? "bg-(--hover)" : null}`}>Contatti</NavLink>

                        </div>
                        <GiHamburgerMenu className="xl:hidden text-(--hover) text-2xl" onClick={showSidebar} />
                        <AnimatePresence>
                            {sidebar &&
                                <motion.div
                                    className="w-5/12 fixed top-0 right-0 h-screen z-100"
                                    variants={fadeInOut}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <div className="xl:hidden flex flex-col bg-(--bg) shadow-lg gap-7 items-center pt-10 uppercase text-white font-bold h-full">
                                        <IoIosCloseCircleOutline className="text-(--hover) text-2xl self-end mr-5" onClick={showSidebar} />

                                        <NavLink to="/" className={({ isActive }) => `w-full py-3 px-5 bg-(--accent) ml-5 rounded-l-md shadow-sm hover:bg-(--hover) transition duration-500 ease-in-out ${isActive ? "bg-(--hover)" : null}`}>Home</NavLink>

                                        <NavLink to="/services" className={({ isActive }) => `w-full py-3 px-5 bg-(--accent) ml-5 rounded-l-md shadow-sm hover:bg-(--hover) transition duration-500 ease-in-out ${isActive ? "bg-(--hover)" : null}`}>Servizi</NavLink>

                                        <NavLink to="/contact" className={({ isActive }) => `w-full py-3 px-5 bg-(--accent) ml-5 rounded-l-md shadow-sm hover:bg-(--hover) transition duration-500 ease-in-out ${isActive ? "bg-(--hover)" : null}`}>Contatti</NavLink>
                                    </div>
                                </motion.div>
                            }
                        </AnimatePresence>
                    </div>

                }
            </div>
        </div>

    )
}