import { FC } from 'react';
import './Slider.css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';

import dish1 from '../../Img/menu/1.jpg'
import dish2 from '../../Img/menu/2.jpg'
import dish3 from '../../Img/menu/3.jpg'
import dish4 from '../../Img/menu/4.jpg'
import dish5 from '../../Img/menu/5.jpg'
import dish6 from '../../Img/menu/6.jpg'
import dish7 from '../../Img/menu/7.jpg'
import dish8 from '../../Img/menu/8.jpg'
import dish9 from '../../Img/menu/9.jpg'
import dish10 from '../../Img/menu/10.jpg'

const Slider: FC = () => {


    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    type: 'fraction',
                }}



                modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
                className="mySwiper"
            >
                {/* {
                    SliderComponent.map((slide, i) => (
                        <SwiperSlide key={i}>
                            <MainBottom {...slide} PoppupWindow={PoppupWindow} setPoppupWindow={setPoppupWindow} />
                        </SwiperSlide>
                    ))
                } */}
                <SwiperSlide>
                    <img src={dish1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={dish2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={dish3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={dish4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={dish5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={dish6} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={dish7} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={dish8} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={dish9} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={dish10} />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider;