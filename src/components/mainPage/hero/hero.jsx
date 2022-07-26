import s from './hero.module.scss';
import mainImage from './../../../img/hero.png';

const Hero = (props) => {
    return (
        <section className={s.main_slider}>
            <div className={s.main_slider__container}>
                <div className={`${s.main_slider__swiper} swiper`}>
                    <div className="swiper-wrapper">
                        <div className={`${s.main_slider__slide} swiper-slide`}>
                            <div className={s.main_slider__image}>
                                <img src={mainImage} alt="Картинка"/>
                                    <a href="recept.html" data-swiper-parallax-opacity="0" data-swiper-parallax-y="100%"
                                       className={s.info_slider}>
                                        <h3 className={s.info_slider__title}>Боб в гювеч</h3>
                                        <div className={s.info_slider__content}>
                                            Съставки: боб, лук, мокров, чушка, дом ат, чесън, червен пипер, гьозум, сол,
                                            олео
                                        </div>
                                    </a>
                            </div>
                        </div>

                    </div>
                    <div className={s.controls_slider_main}>
                        <button type="button" className="slider-arrow slider-arrow_prev _icon-arrow-down"></button>
                        <div className="controls-slider-main__dots"></div>
                        <button type="button" className="slider-arrow slider-arrow_next _icon-arrow-down"></button>
                    </div>
                </div>
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