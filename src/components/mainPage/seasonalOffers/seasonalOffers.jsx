import s from './seasonalOffers.module.scss';
import {Link} from "react-router-dom";
import ItemRecept from "../../common/itemRecept";

const SeasonalOffers = (props) => {
    return (
        <section className={s.seasonal_recipes}>
            <div className={s.seasonal_recipes__container}>
                <img className={s.seasonal_recipes__image_1} src={require('./../../../img/pngwing 1.png')} data-prlx-mouse data-prlx-dxr
                     alt="image"/>
                <img className={s.seasonal_recipes__image_2} src={require('./../../../img/pngegg (6) 1.png')} data-prlx-mouse data-prlx-dxr
                     alt="image"/>
                <h2 className={s.seasonal_recipes__title}>Сезонни предложения</h2>
                <div className="seasonal-recipes__slider swiper">
                    <ul className={`${s.seasonal_recipes__list} swiper-wrapper`}>
                        <ItemRecept state={props.state} />
                    </ul>
                    <div className="seasonal-recipes__controll controll-recipes-useful">
                        <div className="controll-recipes-useful__button-prev  _icon-arrow-down"></div>
                        <div className="controll-recipes-useful__patination swiper-pagination"></div>
                        <div className="controll-recipes-useful__button-next  _icon-arrow-down"></div>
                    </div>
                </div>
                <Link to="catalog" type="button" className={`${s.seasonal_recipes__button} btn`}>Виж всички
                    рецепти</Link>
            </div>
        </section>
    )
}

export default SeasonalOffers;