import notFound from "../assets/not-found.png"
import { Link } from "react-router-dom"
export default function NotFound() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center h-screen">
            <img src={notFound} alt="not-found-image" className="w-8/12 md:w-4/12 lg:w-3/12" />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl text-(--text) font-bold">404</h1>
                <p className="mb-5">Pagina non trovata</p>
                <Link to="/" className="px-5 py-3 bg-(--accent) hover:bg-(--hover) text-white font-bold rounded-md transition duration:0.3 ease-in-out">Torna alla Homepage</Link>
            </div>

        </div>
    )
}