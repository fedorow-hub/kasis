import s from './hero.module.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Virtual, Navigation, Pagination} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import si from "../allRecepes/allRecepes.module.scss";
import {Link} from "react-router-dom";

const Hero = (props) => {

    const slides = props.state.map((el, i) => (
        <div key={i} className={s.main_slider__swiper} >
            <div className={s.main_slider__image}>
                <img src={el.img} alt="Картинка"/>
                <Link to={`recept/${el.id}`} data-swiper-parallax-opacity="0" data-swiper-parallax-y="100%"
                   className={s.info_slider}>
                    <h3 className={s.info_slider__title}>{el.title}</h3>
                    <div className={s.info_slider__content}>
                        {el.text}
                    </div>
                </Link>
            </div>
        </div>
    ));

    return (
        <section className={s.main_slider}>
            <div className={s.main_slider__container}>
                <Swiper className={s.recipes_all__list}
                        modules={[Virtual, Pagination, Navigation]}
                        navigation
                        pagination = {{ clickable: true }}
                        spaceBetween={16}
                        slidesPerView={1}
                        virtual
                >
                    {slides.map((slideContent, index) => (
                        <SwiperSlide className={si.recipes_all__list} key={slideContent} virtualIndex={index}>
                            {slideContent}
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className={s.main_slider__body}>
                    <h2 className={s.main_slider__title}>Основни ястия:</h2>
                    <div className={s.main_slider__text}>
                        31 начина, как да изненадате близките си
                    </div>

                    <a href="#" className="btn">Виж още</a>
                </div>
            </div>
        </section>
    )
}

export default Hero;