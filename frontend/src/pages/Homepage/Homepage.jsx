import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules"
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import stock_1 from '../../assets/stock-1.png'
import stock_2 from '../../assets/stock-2.png'
import stock_3 from '../../assets/stock-3.png'
import stock_4 from '../../assets/stock-4.png'

import { SlArrowRightCircle } from "react-icons/sl";

import style from './Homepage.module.css'

export default function Homepage() {
    const { images } = useContext(GlobalContext);
    const { containerSize } = useContext(GlobalContext);
    return (

        <div className="bg-(--bg) shadow-lg pb-10">
            <section className={`${style.background} shadow-lg`}>
                <div className={`${containerSize} flex flex-col items-start font-bold text-white pt-10`}>
                    <h1 className="text-6xl">Fisiogamma, una famiglia di fisioterapisti.</h1>
                    <p className="text-3xl pt-3">Forse la parola fisioterapia a molte persone dice poco, ma per la famiglia Arretosi è tutto: lavoro, mestiere e, soprattutto, passione.</p>
                    <NavLink to="/contact" className="self-end mt-5 bg-(--bg) text-(--hover) p-3 rounded-lg hover:bg-(--blue-accent) hover:text-white shadow-lg transition duration-500 ease-in-out">
                        <button className="uppercase cursor-pointer">Contatta lo studio</button>
                    </NavLink>
                </div>
            </section>
            <section className={`${containerSize} pb-7 grid grid-cols-3 gap-10 -mt-15`}>
                <div className="flex flex-col items-center pb-3 bg-(--bg) rounded-md shadow-sm hover:-translate-y-2 transition duration:500 ease-in-out">
                    <img src={stock_1} alt="img-card-1" className="max-w-8/12" />
                    <h3 className="uppercase text-(--hover) font-bold text-2xl pb-2">Il centro</h3>
                    <p className="text-center flex-grow">Scopri un centro altamente attrezzato a <span className="font-bold">Salsomaggiore Terme (Parma)</span></p>
                </div>
                <div className="flex flex-col items-center pb-3 bg-(--bg) rounded-md shadow-sm hover:-translate-y-2 transition duration:500 ease-in-out">
                    <img src={stock_2} alt="img-card-2" className="max-w-8/12" />
                    <h3 className="uppercase text-(--hover) font-bold text-2xl pb-2">Lo staff</h3>
                    <p className="text-center flex-grow">Affidati ad uno staff con una esperienza pluri-decennale</p>
                </div>
                <div className="flex flex-col items-center pb-3 bg-(--bg) rounded-md shadow-sm hover:-translate-y-2 transition duration:500 ease-in-out">
                    <img src={stock_3} alt="img-card-3" className="max-w-8/12" />
                    <h3 className="uppercase text-(--hover) font-bold text-2xl pb-2">Servizi</h3>
                    <p className="text-center flex-grow">Una vasta gamma di servizi per la cura della tua salute</p>
                </div>
            </section>
            <section className={`${containerSize}`}>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="text-4xl text-(--hover) font-bold pt-10">Servizi offerti nel nostro poliambulatorio</h2>
                </motion.div>
                <div className="grid grid-cols-3 pb-5 items-center">
                    <div>
                        <ul>
                            <li className="py-1 flex gap-3 hover:text-(--hover) hover:translate-x-3 transition duration:900 ease-in-out">
                                <SlArrowRightCircle className="text-(--hover) text-2xl" />Visite Specialistiche
                            </li>
                            <li className="py-1 flex gap-3 hover:text-(--hover) hover:translate-x-3 transition duration:900 ease-in-out">
                                <SlArrowRightCircle className="text-(--hover) text-2xl" />Infiltrazioni Articolari
                            </li>
                            <li className="py-1 flex gap-3 hover:text-(--hover) hover:translate-x-3 transition duration:900 ease-in-out">
                                <SlArrowRightCircle className="text-(--hover) text-2xl" />Manipolazioni Vertebrali
                            </li>
                            <li className="py-1 flex gap-3 hover:text-(--hover) hover:translate-x-3 transition duration:900 ease-in-out">
                                <SlArrowRightCircle className="text-(--hover) text-2xl" />Tecarterapia
                            </li>
                            <li className="py-1 flex gap-3 hover:text-(--hover) hover:translate-x-3 transition duration:900 ease-in-out">
                                <SlArrowRightCircle className="text-(--hover) text-2xl" />Onde d&apos;Urto
                            </li>
                            <li className="py-1 flex gap-3 hover:text-(--hover) hover:translate-x-3 transition duration:900 ease-in-out">
                                <SlArrowRightCircle className="text-(--hover) text-2xl" />Laserterapia
                            </li>
                            <li className="py-1 flex gap-3 hover:text-(--hover) hover:translate-x-3 transition duration:900 ease-in-out">
                                <SlArrowRightCircle className="text-(--hover) text-2xl" />Ipertermia
                            </li>
                            <li className="py-1 flex gap-3 hover:text-(--hover) hover:translate-x-3 transition duration:900 ease-in-out">
                                <SlArrowRightCircle className="text-(--hover) text-2xl" />Idroforesi
                            </li>
                        </ul>

                    </div>
                    <div>
                        <ul>
                            <li className="py-1 flex gap-3 hover:text-(--hover) hover:translate-x-3 transition duration:900 ease-in-out">
                                <SlArrowRightCircle className="text-(--hover) text-2xl" />Elettroterapia
                            </li>
                            <li className="py-1 flex gap-3 hover:text-(--hover) hover:translate-x-3 transition duration:900 ease-in-out">
                                <SlArrowRightCircle className="text-(--hover) text-2xl" />Magnetoterapia
                            </li>
                            <li className="py-1 flex gap-3 hover:text-(--hover) hover:translate-x-3 transition duration:900 ease-in-out">
                                <SlArrowRightCircle className="text-(--hover) text-2xl" />Ultrasuonoterapia
                            </li>
                            <li className="py-1 flex gap-3 hover:text-(--hover) hover:translate-x-3 transition duration:900 ease-in-out">
                                <SlArrowRightCircle className="text-(--hover) text-2xl" />Fisiokinesiterapia
                            </li>
                            <li className="py-1 flex gap-3 hover:text-(--hover) hover:translate-x-3 transition duration:900 ease-in-out">
                                <SlArrowRightCircle className="text-(--hover) text-2xl" />Riabilitazione motoria
                            </li>
                            <li className="py-1 flex gap-3 hover:text-(--hover) hover:translate-x-3 transition duration:900 ease-in-out">
                                <SlArrowRightCircle className="text-(--hover) text-2xl" />Linfodrenaggio manuale
                            </li>
                            <li className="py-1 flex gap-3 hover:text-(--hover) hover:translate-x-3 transition duration:900 ease-in-out">
                                <SlArrowRightCircle className="text-(--hover) text-2xl" />Trazioni vertebrali
                            </li>
                            <li className="py-1 flex gap-3 hover:text-(--hover) hover:translate-x-3 transition duration:900 ease-in-out">
                                <SlArrowRightCircle className="text-(--hover) text-2xl" />Neurotaping
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-end">
                        <img src={stock_4} alt="img-list-1" className="max-w-10/12" />
                    </div>
                </div>
            </section>
            <section className={`${containerSize}`}>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    pagination={{ clickable: true }}
                    effect={'fade'}
                >
                    {images ? images.map((image) =>
                        <SwiperSlide key={image.id}>
                            <img src={`http://localhost:3000${image.path}`} alt={image.title} className=" max-w-12/12 mx-auto border-3 border-solid border-(--accent)" />
                        </SwiperSlide>)
                        : "loading..."}
                </Swiper>
            </section>
        </div>
    )
}