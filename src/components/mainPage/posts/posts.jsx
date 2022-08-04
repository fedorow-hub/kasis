import s from "./posts.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Virtual} from 'swiper';

// Import Swiper styles
import 'swiper/css';


const Posts = (props) => {

    const slides = props.state.map((el, i)=>(
        <div key={i} className={s.item_useful}>
            <div className={s.item_useful__image_ibg}>
                <img src={el.img} alt="Image"/>
            </div>
            <div className={s.item_useful__content}>
                <div className={s.item_useful__recipe}>
                    {el.text}
                </div>
                <a href="" className={s.item_useful__link}>{el.date}</a>
            </div>
        </div>
    ));

    return (
        <section className={s.recipes_useful}>
            <div className={s.recipes_useful__container}>
                <h2 className={s.recipes_useful__title}>Знаете ли, че...</h2>
                <Swiper className={`${s.recipes_all__list} `}
                        breakpoints={{
                            320: {
                                slidesPerView: 1
                            },
                            680: {
                                slidesPerView: 2
                            },
                            992: {
                                slidesPerView: 3
                            },
                            1268: {
                                slidesPerView: 3
                            },
                        }}
                        modules={[Virtual]}
                        spaceBetween={16}
                        slidesPerView={3}
                        virtual
                >
                    {slides.map((slideContent, index) => (
                        <SwiperSlide className={s.recipes_useful__list} key={slideContent} virtualIndex={index}>
                            {slideContent}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Posts;