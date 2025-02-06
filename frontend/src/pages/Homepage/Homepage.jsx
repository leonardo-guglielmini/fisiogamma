import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules"
import { NavLink } from "react-router-dom";

import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import stock_1 from '../../assets/stock-1.png'
import stock_2 from '../../assets/stock-2.png'
import stock_3 from '../../assets/stock-3.png'

import { SlArrowRightCircle } from "react-icons/sl";

import style from './Homepage.module.css'

export default function Homepage() {
    const { images } = useContext(GlobalContext);
    return (
        <div className="bg-(--bg) shadow-lg pb-5">
            <div className={`${style.background}`}>
                <div className="container mx-auto flex flex-col items-start font-bold text-white pt-7">
                    <h1 className="text-6xl">Fisiogamma, una famiglia di fisioterapisti.</h1>
                    <p className="text-3xl pt-3">Forse la parola fisioterapia a molte persone dice poco, ma per la famiglia Arretosi è tutto: lavoro, mestiere e, soprattutto, passione.</p>
                    <NavLink to="/contact" className="self-end mt-5 bg-(--bg) text-(--hover) p-3 rounded-lg hover:bg-(--blue-accent) hover:text-white shadow-lg transition duration-500 ease-in-out">
                        <button className="uppercase cursor-pointer">Contatta lo studio</button>
                    </NavLink>
                </div>
            </div>
            <section className="pb-7 container mx-auto grid grid-cols-3 gap-10 -mt-15">
                <div className="flex flex-col items-center bg-(--bg) rounded-md shadow-sm">
                    <img src={stock_1} alt="img-card-1" className="max-w-8/12" />
                    <h3 className="uppercase">Il centro</h3>
                    <p className="text-center flex-grow">Scopri un centro altamente attrezzato a <span>Salsomaggiore Terme (Parma)</span></p>
                </div>
                <div className="flex flex-col items-center bg-(--bg) rounded-md shadow-sm">
                    <img src={stock_2} alt="img-card-2" className="max-w-8/12" />
                    <h3 className="uppercase">Lo staff</h3>
                    <p className="text-center flex-grow">Affidati ad un staff competente e professionale, con una esperienza pluri-decennale</p>
                </div>
                <div className="flex flex-col items-center bg-(--bg) rounded-md shadow-sm">
                    <img src={stock_3} alt="img-card-3" className="max-w-8/12" />
                    <h3 className="uppercase">Servizi</h3>
                    <p className="text-center flex-grow">Una vasta gamma di servizi per la cura della tua salute</p>
                </div>
            </section>
            <section className="container mx-auto">
                <h2>Servizi offerti nel nostro poliambulatorio</h2>
                <div className="grid grid-cols-2">
                    <div>
                        <ul>
                            <li className="py-1"><SlArrowRightCircle className="text-(--hover) text-2xl" /></li>
                            <li className="py-1"><SlArrowRightCircle className="text-(--hover) text-2xl" /></li>
                            <li className="py-1"><SlArrowRightCircle className="text-(--hover) text-2xl" /></li>
                            <li className="py-1"><SlArrowRightCircle className="text-(--hover) text-2xl" /></li>
                            <li className="py-1"><SlArrowRightCircle className="text-(--hover) text-2xl" /></li>
                            <li className="py-1"><SlArrowRightCircle className="text-(--hover) text-2xl" /></li>
                            <li className="py-1"><SlArrowRightCircle className="text-(--hover) text-2xl" /></li>
                            <li className="py-1"><SlArrowRightCircle className="text-(--hover) text-2xl" /></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="py-1"><SlArrowRightCircle className="text-(--hover) text-2xl" /></li>
                            <li className="py-1"><SlArrowRightCircle className="text-(--hover) text-2xl" /></li>
                            <li className="py-1"><SlArrowRightCircle className="text-(--hover) text-2xl" /></li>
                            <li className="py-1"><SlArrowRightCircle className="text-(--hover) text-2xl" /></li>
                            <li className="py-1"><SlArrowRightCircle className="text-(--hover) text-2xl" /></li>
                            <li className="py-1"><SlArrowRightCircle className="text-(--hover) text-2xl" /></li>
                            <li className="py-1"><SlArrowRightCircle className="text-(--hover) text-2xl" /></li>
                            <li className="py-1"><SlArrowRightCircle className="text-(--hover) text-2xl" /></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
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
                            <img src={`http://localhost:3000${image.path}`} alt={image.title} className=" max-w-10/12 object-contain mx-auto border-3 border-solid border-(--accent)" />
                        </SwiperSlide>)
                        : "loading..."}
                </Swiper>
            </section>
        </div>
    )
}