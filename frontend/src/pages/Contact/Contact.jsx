import { useState, useContext } from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import GlobalContext from "../../contexts/GlobalContext";

const baseFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
}

export default function Contact() {
    const { containerSize } = useContext(GlobalContext);
    const [formData, setFormData] = useState(baseFormData);

    const handleDataChange = (e) => {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value,
        })
        )
        console.log(e.target.name, e.target.value);
    }

    const sendForm = async (e) => {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <div className="bg-(--bg)">
            <section className="bg-red-500 h-50">

            </section>
            <section className={`${containerSize} grid grid-cols-2`}>
                <div className="flex flex-col">
                    <div>
                        <h1>Fisiogamma S.n.c.</h1>
                        <h2>di Arretosi Nicola & C.</h2>
                    </div>
                    <div>
                        <h3>Viale Matteotti, 3/B</h3>
                        <h3>43039 - Salsomaggiore Terme (PR)</h3>
                        <ul className="text-(--text)">
                            <li className="flex gap-2 items-center text-sm py-0.5">
                                <FaPhoneSquareAlt /> +39 0524 57 25 09
                            </li>
                            <li className="flex gap-2 items-center text-sm py-0.5">
                                <FaFax /> +39 0524 20 03 50
                            </li>
                            <li className="flex gap-2 items-center text-sm py-0.5">
                                <MdEmail />
                                <a href="mailto:info@fisiogamma.it" className="hover:text-(--hover) hover:underline">info@fisiogamma.it</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <form action="submit" onSubmit={sendForm} className="flex flex-col justify-center items-center">
                        <input type="text" className="bg-blue-500" name="name" value={formData.name} placeholder="Nominativo" onChange={handleDataChange} required />
                        <input type="text" className="bg-blue-500" name="email" value={formData.email} placeholder="Email" onChange={handleDataChange} required />
                        <input type="text" className="bg-blue-500" name="phone" value={formData.phone} placeholder="Telefono" onChange={handleDataChange} required />
                        <input type="text" className="bg-blue-500" name="message" value={formData.message} placeholder="Messaggio" onChange={handleDataChange} required />
                        <button>Invia</button>
                    </form>
                </div>
            </section>
        </div>
    )
}