import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules"
import { Link } from "react-router-dom";

import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import stock_1 from '../assets/stock-1.png'
import stock_2 from '../assets/stock-2.png'
import stock_3 from '../assets/stock-3.png'
import stock_4 from '../assets/stock-4.png'

import { SlArrowRightCircle } from "react-icons/sl";

import style from '../assets/modules/Homepage.module.css'

export default function Homepage() {
    const { images, services } = useContext(GlobalContext);
    return (
        <div className="shadow-lg pb-10">
            <section className={`${style.background} shadow-md shadow-(color:--hero)`}>
                <div className={`container mx-auto flex flex-col items-start font-bold text-white pt-10 pb-10 md:pt-20`}>
                    <h1 className="text-3xl sm:text-5xl">Fisiogamma, una famiglia di fisioterapisti.</h1>
                    <p className="hidden md:block text-3xl pt-3">Forse la parola fisioterapia a molte persone dice poco, ma per la famiglia Arretosi è tutto: lavoro, mestiere e, soprattutto, passione.</p>
                    <Link to="/contact" className="self-end mt-5 bg-(--bg) text-(--hover) p-3 rounded-lg hover:bg-(--blue-accent) hover:text-white shadow-lg transition duration-500 ease-in-out">
                        <button className="uppercase cursor-pointer">Contatta lo studio</button>
                    </Link>
                </div>
            </section>
            <section className={`container mx-auto pb-10 grid grid-cols-3 gap-3 xl:gap-10 mt-10 sm:-mt-25`}>
                <a href="https://www.google.com/maps/place/Fisiogamma+S.N.C./@44.8172972,9.9778473,17z/data=!3m1!4b1!4m6!3m5!1s0x47808a7a44a0fbd7:0x399e536b5c9ac381!8m2!3d44.8172934!4d9.9804222!16s%2Fg%2F1tjffpty?entry=ttu&g_ep=EgoyMDI1MDIwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center pb-3 bg-(--bg) rounded-md shadow-sm hover:-translate-y-10 transition duration:500 ease-in-out cursor-pointer">
                    <img src={stock_1} alt="img-card-1" className="max-w-8/12" />
                    <h3 className="uppercase text-(--hover) font-bold text-lg md:text-2xl pb-2">Il centro</h3>
                    <p className="text-center flex-grow text-sm sm:text-md">Scopri un centro altamente attrezzato a <span className="font-bold">Salsomaggiore Terme (Parma)</span></p>
                </a>
                <Link to="/staff" className="flex flex-col items-center pb-3 bg-(--bg) rounded-md shadow-sm hover:-translate-y-10 transition duration:500 ease-in-out cursor-pointer">
                    <img src={stock_2} alt="img-card-2" className="max-w-8/12" />
                    <h3 className="uppercase text-(--hover) font-bold text-lg md:text-2xl pb-2">Lo staff</h3>
                    <p className="text-center flex-grow text-sm sm:text-md">Affidati ad uno staff con una esperienza pluri-decennale</p>
                </Link>
                <Link to="/services" className="flex flex-col items-center pb-3 bg-(--bg) rounded-md shadow-sm hover:-translate-y-10 transition duration:500 ease-in-out cursor-pointer">
                    <img src={stock_3} alt="img-card-3" className="max-w-8/12" />
                    <h3 className="uppercase text-(--hover) font-bold text-lg md:text-2xl pb-2">Servizi</h3>
                    <p className="text-center flex-grow text-sm sm:text-md">Una vasta gamma di servizi per la cura della tua salute</p>
                </Link>
            </section>
            <section className={`container mx-auto`}>
                <h2 className="text-2xl sm:text-4xl text-(--hover) font-bold pt-10 pb-5">Servizi offerti nel nostro poliambulatorio</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 pb-10 items-center">
                    <div>
                        <ul>
                            {services
                                ? services.slice(0, Math.ceil(services.length / 2)).map((service) => (
                                    <li key={service.id}>
                                        <Link to={`/services`} className="py-1 flex gap-3 hover:text-(--hover) hover:translate-x-3 transition duration-700 ease-in-out">
                                            <SlArrowRightCircle className="text-(--hover) hidden sm:block text-2xl" />
                                            {service.title}
                                        </Link>
                                    </li>
                                ))
                                : "loading..."}
                        </ul>
                    </div>
                    <div>
                        <ul>
                            {services
                                ? services.slice(Math.ceil(services.length / 2)).map((service) => (
                                    <li key={service.id}>
                                        <Link to={`/services`} className="py-1 flex gap-3 hover:text-(--hover) hover:translate-x-3 transition duration-700 ease-in-out">
                                            <SlArrowRightCircle className="text-(--hover) hidden sm:block text-2xl" />
                                            {service.title}
                                        </Link>
                                    </li>
                                ))
                                : "loading..."}
                        </ul>
                    </div>
                    <div className="justify-end hidden sm:flex">
                        <img src={stock_4} alt="img-list-1" className="max-w-10/12" />
                    </div>
                </div>
            </section >
            <section className={`container mx-auto`}>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    slidesPerView={1}
                    navigation={false}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    pagination={{ clickable: true }}
                    effect={'fade'}
                    className="shadow-md shadow-(color:--accent)"
                >
                    {images ? images.map((image) =>
                        <SwiperSlide key={image.id}>
                            <img src={`http://localhost:3000${image.path}`} alt={image.title} className="w-full mx-auto border-3 border-solid border-(--accent)" />
                        </SwiperSlide>)
                        : "loading..."}
                </Swiper>
            </section>
        </div >
    )
}