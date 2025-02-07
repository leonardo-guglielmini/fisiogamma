import { useState, useContext } from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

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
        <div>
            <section className={`${containerSize} h-100 pt-5`}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2830.2149713501353!2d9.98049!3d44.817184999999995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x399e536b5c9ac381!2sFisiogamma+S.N.C.!5e0!3m2!1sit!2sit!4v1397904001829" className="w-full h-full"></iframe>
            </section>
            <section className={`${containerSize} grid grid-cols-2 py-10`}>
                <div className="flex flex-col">
                    <div className="pb-3">
                        <h1 className="text-4xl">Fisiogamma S.n.c.</h1>
                        <h2 className="text-2xl">di Arretosi Nicola & C.</h2>
                    </div>
                    <hr className="w-7/12 text-(--hover)" />
                    <div className="pt-3">
                        <h3 className="text-xl">Viale Matteotti, 3/B</h3>
                        <h3 className="text-lg">43039 - Salsomaggiore Terme (PR)</h3>
                        <ul className="text-(--text) py-3">
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
                    <div>
                        <div className="flex gap-2 items-center text-xl pt-3 pb-1">
                            <FaRegClock />
                            <h2>Orari d&apos;apertura</h2>
                        </div>
                        <div className="grid grid-cols-[30%_70%] grid-rows-2">
                            <p>Lun - Ven</p>
                            <p>8:30-12:30 | 14:30-18:30</p>
                            <p>Sabato</p>
                            <p>8:30-12:30</p>

                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl text-(--hover) pb-3 font-bold">Maggiori informazioni?</h2>
                    <form action="submit" onSubmit={sendForm} className="flex flex-col items-start gap-2">
                        <input type="text" className="w-6/12 p-2 border border-1 border-(--accent) bg-(--details) rounded-md outline-(--hover)" name="name" value={formData.name} placeholder="Nominativo" onChange={handleDataChange} required />
                        <div className="w-12/12 flex justify-between">
                            <input type="text" className="w-6/12 p-2 border border-1 border-(--accent) bg-(--details) rounded-md outline-(--hover)" name="email" value={formData.email} placeholder="Email" onChange={handleDataChange} required />
                            <input type="text" className="w-5/12 p-2 border border-1 border-(--accent) bg-(--details) rounded-md outline-(--hover)" name="phone" value={formData.phone} placeholder="Telefono" onChange={handleDataChange} required />
                        </div>

                        <textarea rows="3" cols="50" className="w-12/12 p-2 border border-1 border-(--accent) bg-(--details) rounded-md outline-(--hover)" name="message" value={formData.message} placeholder="Messaggio" onChange={handleDataChange} required />
                        <button className="py-3 px-5 bg-(--details) border border-1 border-(--accent) rounded-md hover:bg-(--hover) hover:text-white transition duration-300 ease-in-out">Invia</button>
                    </form>
                </div>
            </section>
        </div>
    )
}