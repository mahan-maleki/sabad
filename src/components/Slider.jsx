import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronRight, ChevronLeft } from "lucide-react"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

const Slider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="container py-4 position-relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                className="swiper-bootstrap"
            >
                <SwiperSlide>
                    <img
                        src="https://picsum.photos/800/400?1"
                        alt="Slide 1"
                        className="w-100 h-100 rounded"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://picsum.photos/800/400?2"
                        alt="Slide 2"
                        className="w-100 h-100 rounded"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://picsum.photos/800/400?3"
                        alt="Slide 3"
                        className="w-100 h-100 rounded"
                    />
                </SwiperSlide>

                {/* دکمه‌های سفارشی */}
                <button ref={nextRef} className="custom-prev btn btn-light shadow">
                    <ChevronLeft />

                </button>
                <button ref={prevRef} className="custom-next btn btn-light shadow">
                    <ChevronRight />
                </button>
            </Swiper>
        </div>
    );
};

export default Slider;
