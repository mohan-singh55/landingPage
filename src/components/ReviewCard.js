import ReviewSwiper from "./ReviewSwiper";
import patientImg from "../images/patient.jpg";
import patientImg2 from "../images/patient2.jpg";


// import Swiper core and required modules
import { Pagination, Autoplay, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "./ReviewCard.css";


export default () => {



    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Pagination, Autoplay, A11y]}
                spaceBetween={60}
                slidesPerView={1}
                slidesPerGroup={1}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2
                    },
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >

                <SwiperSlide>
                    <ReviewSwiper ClientImg={patientImg} index={0} />
                </SwiperSlide>

                <SwiperSlide>
                    <ReviewSwiper ClientImg={patientImg2} index={1} />
                </SwiperSlide>

                <SwiperSlide>
                    <ReviewSwiper ClientImg={patientImg} index={2} />
                </SwiperSlide>

                <SwiperSlide>
                    <ReviewSwiper ClientImg={patientImg2} index={3} />
                </SwiperSlide>

                <SwiperSlide>
                    <ReviewSwiper ClientImg={patientImg} index={4} />
                </SwiperSlide>

                <SwiperSlide>
                    <ReviewSwiper ClientImg={patientImg2} index={5} />
                </SwiperSlide>

                <SwiperSlide>
                    <ReviewSwiper ClientImg={patientImg} index={6} />
                </SwiperSlide>

                <SwiperSlide>
                    <ReviewSwiper ClientImg={patientImg2} index={7} />
                </SwiperSlide>

                <SwiperSlide>
                    <ReviewSwiper ClientImg={patientImg} index={8} />
                </SwiperSlide>

                <SwiperSlide>
                    <ReviewSwiper ClientImg={patientImg2} index={9} />
                </SwiperSlide>


            </Swiper>
        </>
    )
};
