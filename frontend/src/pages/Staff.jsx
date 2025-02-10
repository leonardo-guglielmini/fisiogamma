import { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules"
import { Link } from "react-router-dom";

import GlobalContext from "../contexts/GlobalContext";

export default function Staff() {

    const { staff, containerSize } = useContext(GlobalContext);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={`${containerSize} py-10`}>
            <h1 className="text-4xl font-bold text-(--hover)">Il nostro staff</h1>
            <div className="flex justify-center items-center relative">
                <Swiper
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 300,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={false}
                    navigation={true}
                    className="w-full max-w-4xl"
                >
                    {staff.map((employee, index) => (
                        <SwiperSlide key={employee.id} className="flex">
                            {index === activeIndex ?
                                <Link to={`/staff/${employee.slug}`}>
                                    <img
                                        src={`http://localhost:3000/${employee.image}`}
                                        alt={`Slide ${employee.id}`}
                                        className="rounded-2xl shadow-lg"
                                    />
                                    <h2 className="text-lg text-(--hover) font-bold">{employee.name} {employee.surname}</h2>
                                </Link> :
                                <div>
                                    <img
                                        src={`http://localhost:3000/${employee.image}`}
                                        alt={`Slide ${employee.id}`}
                                        className="rounded-2xl shadow-lg"
                                    />
                                    <h2 className="text-lg text-(--hover) font-bold">{employee.name} {employee.surname}</h2>
                                </div>
                            }

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}