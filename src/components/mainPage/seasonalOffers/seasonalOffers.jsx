import s from './seasonalOffers.module.scss';
import si from './../allRecepes/allRecepes.module.scss';
import {Link} from "react-router-dom";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Virtual, Navigation, Pagination} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SeasonalOffers = (props) => {

    const slides = props.state.map((el, i) => (
        <li key={i} className={si.item_recipe} >
            <Link to="" className={si.item_recipe__link}>
                <div className={si.item_recipe__image_ibg}>
                    <img src={el.img} className="" alt="Изображение"/>
                </div>
                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_32_430)">
                        <path d="M15.3103 9.64887C14.9076 9.65088 14.5106 9.7428 14.1484 9.91784C13.7862 10.0929 13.4681 10.3466 13.2177 10.6602L9.28533 8.21476C9.42865 7.75465 9.42865 7.26218 9.28533 6.80207L13.2177 4.3566C13.6168 4.84822 14.178 5.18344 14.8018 5.3029C15.4256 5.42235 16.0718 5.31832 16.6258 5.00924C17.1799 4.70015 17.6061 4.20596 17.829 3.61421C18.0519 3.02246 18.057 2.37134 17.8434 1.77619C17.6299 1.18105 17.2115 0.680297 16.6623 0.362638C16.1132 0.044979 15.4687 -0.0690809 14.8431 0.0406634C14.2175 0.150408 13.6511 0.476872 13.2443 0.962226C12.8376 1.44758 12.6166 2.06049 12.6206 2.6924C12.6231 2.93169 12.6593 3.16945 12.7282 3.39875L8.7958 5.84421C8.44864 5.40948 7.97412 5.09294 7.43801 4.93848C6.9019 4.78402 6.33077 4.79928 5.80377 4.98215C5.27678 5.16503 4.82003 5.50645 4.49683 5.9591C4.17363 6.41175 4 6.95321 4 7.50841C4 8.06362 4.17363 8.60508 4.49683 9.05773C4.82003 9.51038 5.27678 9.8518 5.80377 10.0347C6.33077 10.2176 6.9019 10.2328 7.43801 10.0784C7.97412 9.92389 8.44864 9.60735 8.7958 9.17262L12.7282 11.6181C12.6593 11.8474 12.6231 12.0851 12.6206 12.3244C12.6206 12.8536 12.7783 13.3709 13.0739 13.8109C13.3694 14.2509 13.7895 14.5938 14.281 14.7963C14.7725 14.9988 15.3133 15.0518 15.835 14.9486C16.3568 14.8454 16.836 14.5905 17.2122 14.2163C17.5884 13.8422 17.8445 13.3654 17.9483 12.8464C18.0521 12.3274 17.9988 11.7894 17.7953 11.3005C17.5917 10.8116 17.2469 10.3938 16.8046 10.0998C16.3623 9.80579 15.8423 9.64887 15.3103 9.64887ZM15.3103 1.08706C15.6295 1.08706 15.9415 1.18121 16.2069 1.35761C16.4723 1.534 16.6791 1.78472 16.8013 2.07806C16.9234 2.3714 16.9554 2.69418 16.8931 3.00558C16.8308 3.31699 16.6771 3.60303 16.4514 3.82754C16.2257 4.05205 15.9382 4.20495 15.6251 4.26689C15.3121 4.32883 14.9876 4.29704 14.6927 4.17554C14.3978 4.05403 14.1458 3.84827 13.9684 3.58428C13.7911 3.32028 13.6965 3.0099 13.6965 2.6924C13.6965 2.26663 13.8665 1.85831 14.1691 1.55725C14.4718 1.25619 14.8823 1.08706 15.3103 1.08706ZM6.70321 9.11375C6.38402 9.11375 6.07201 9.0196 5.80661 8.84321C5.54122 8.66681 5.33437 8.41609 5.21223 8.12275C5.09008 7.82941 5.05812 7.50663 5.12039 7.19523C5.18266 6.88382 5.33636 6.59778 5.56206 6.37327C5.78776 6.14876 6.07531 5.99586 6.38837 5.93392C6.70142 5.87198 7.0259 5.90377 7.32079 6.02527C7.61568 6.14678 7.86773 6.35254 8.04506 6.61654C8.22238 6.88053 8.31703 7.19091 8.31703 7.50841C8.31703 7.93418 8.14701 8.3425 7.84436 8.64356C7.5417 8.94462 7.13122 9.11375 6.70321 9.11375ZM15.3103 13.9298C14.9911 13.9298 14.6791 13.8356 14.4137 13.6592C14.1483 13.4828 13.9415 13.2321 13.8193 12.9388C13.6972 12.6454 13.6652 12.3227 13.7275 12.0112C13.7897 11.6998 13.9434 11.4138 14.1691 11.1893C14.3948 10.9648 14.6824 10.8119 14.9954 10.7499C15.3085 10.688 15.633 10.7198 15.9279 10.8413C16.2228 10.9628 16.4748 11.1686 16.6521 11.4326C16.8295 11.6966 16.9241 12.0069 16.9241 12.3244C16.9241 12.7502 16.7541 13.1585 16.4514 13.4596C16.1488 13.7606 15.7383 13.9298 15.3103 13.9298Z" fill="white"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_32_430" x="0" y="0" width="22" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_430"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_430" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <div className={si.item_recipe__content}>
                    <h3 className={si.item_recipe__title}>{el.title}</h3>
                    <div className={si.item_recipe__composition}>{el.text}</div>
                    <div className={si.item_recipe__action}>
                        <div className={si.item_recipe__like}>{el.like}</div>
                        <div className={si.item_recipe__time}>{el.time}</div>
                    </div>
                </div>
            </Link>
        </li>
    ));

    return (
        <section className={s.seasonal_recipes}>
            <div className={s.seasonal_recipes__container}>
                <img className={s.seasonal_recipes__image_1} src={require('./../../../img/pngwing 1.png')} data-prlx-mouse data-prlx-dxr
                     alt="Изображение"/>
                <img className={s.seasonal_recipes__image_2} src={require('./../../../img/pngegg (6) 1.png')} data-prlx-mouse data-prlx-dxr
                     alt="Изображение"/>
                <h2 className={s.seasonal_recipes__title}>Сезонни предложения</h2>

                <Swiper className={s.recipes_all__list}
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
                                slidesPerView: 4
                            },
                        }}
                        modules={[Virtual, Pagination, Navigation]}
                        navigation
                        pagination={{ type: 'fraction' }}

                        spaceBetween={16}
                        slidesPerView={4}
                        virtual
                >
                    {slides.map((slideContent, index) => (
                        <SwiperSlide className={si.recipes_all__list} key={slideContent} virtualIndex={index}>
                            {slideContent}
                        </SwiperSlide>
                    ))}

                </Swiper>

                <Link to="catalog" type="button" className={`${s.seasonal_recipes__button} btn`}>Виж всички
                    рецепти
                </Link>
            </div>
        </section>
    )
}

export default SeasonalOffers;