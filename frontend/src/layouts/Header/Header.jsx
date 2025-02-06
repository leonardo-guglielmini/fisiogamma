import { NavLink } from "react-router-dom"

import logo from "../../assets/logo-fisiogamma.png"

export default function Header() {
    return (
        <div className="py-5 relative shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <img src={logo} alt="logo" />
                <ul className="flex gap-2 uppercase text-white font-bold">
                    <li>
                        <NavLink to="/" className={({ isActive }) => `py-3 px-5 bg-(--accent) rounded-md shadow-sm hover:bg-(--hover) transition duration-500 ease-in-out ${isActive ? "bg-(--hover)" : null}`}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className={({ isActive }) => `py-3 px-5 bg-(--accent) rounded-md shadow-sm hover:bg-(--hover) transition duration-500 ease-in-out ${isActive ? "bg-(--hover)" : null}`}>Servizi</NavLink>
                    </li>
                    <li>
                        <NavLink to="/staff" className={({ isActive }) => `py-3 px-5 bg-(--accent) rounded-md shadow-sm hover:bg-(--hover) transition duration-500 ease-in-out ${isActive ? "bg-(--hover)" : null}`}>Staff</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => `py-3 px-5 bg-(--accent) rounded-md shadow-sm hover:bg-(--hover) transition duration-500 ease-in-out ${isActive ? "bg-(--hover)" : null}`}>Contatti</NavLink>
                    </li>
                </ul>
            </div>
        </div>

    )
}