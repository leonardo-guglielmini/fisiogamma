import logo_tecar from "../../assets/logo-tecar.png";
import logo_sixtus from "../../assets/logo-sixtus.png";


import { SlInfo } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className="bg-(--bg) pb-5">
            <hr className="max-w-11/12 mx-auto text-(--hover) pt-5" />
            <div className="grid grid-cols-3 text-center text-(--hover) font-bold text-xl">
                <div className="flex flex-col items-center">
                    <h4>Centro Autorizzato Tecar</h4>
                    <img src={logo_tecar} alt="logo-tecar" className="max-w-8/12 pb-2" />
                    <a href="https://humantecar.com/" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center text-(--text) opacity-75 text-sm">
                        <SlInfo />
                        <span className="hover:text-black">Vai al sito ufficiale</span>
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <h4>Centro Fiduciario Sixtus</h4>
                    <img src={logo_sixtus} alt="logo-sixtus" className="max-w-8/12 pb-2" />
                    <a href="https://www.sixtusitalia.it/" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center text-(--text) opacity-75 text-sm">
                        <SlInfo />
                        <span className="hover:text-black">Vai al sito ufficiale</span>
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <h4>Contatti</h4>
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
                        <li className="py-0.5">
                            <a href="https://www.facebook.com/people/Fisiogamma-Snc/100066640843716/?notif_t=page_fan" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center text-sm">
                                <FaFacebook className="text-blue-900" />
                                <span className="hover:text-blue-900">Fisiogamma s.n.c.</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>

            <div className="flex items-center justify-center pt-5">
                <p className="text-xs text-(--text) opacity-75">© Fisiogamma S.n.c. di Arretosi Nicola & C. - Viale Matteotti, 3/B - 43039 - Salsomaggiore Terme (Parma) - P.IVA IT02020150344 - R.E.A. PR-204359</p>
            </div>

        </div>
    )
}