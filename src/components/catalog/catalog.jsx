import Filter from "../mainPage/filter/filter";
import s from "./catalog.module.scss";
import {Link} from "react-router-dom";
import ItemRecept from "../common/itemRecept";

const Catalog = (props) => {
    return (
        <main>
            <div className={s.page__header}>
                <div className={s.page__container}>
                    <nav>
                        <ul className={s.breadcrumbs__list}>
                            <li className="breadcrumbs__item">
                                <Link to="" className={s.breadcrumbs__link}>Главная</Link>
                            </li>
                            <li className="breadcrumbs__item">
                                <span className="breadcrumbs__current">Рецепти</span>
                            </li>
                        </ul>
                    </nav>
                    <h1 className={s.page_title}>Всички рецепти</h1>
                </div>
            </div>
            <Filter addRecept={props.addRecept} newPostText={props.state.newPostText} updateNewPostText={props.updateNewPostText}/>
            <section className={s.seasonal_recipes}>
                <div className={s.page__container}>
                    <ul className={s.recepy_all}>
                        <ItemRecept state={props.state.catalog}/>
                    </ul>
                    <div className="seasonal-recipes__controll controll-recipes-useful">
                        <div className="controll-recipes-useful__button-prev  _icon-arrow-down"></div>
                        <div className="controll-recipes-useful__patination swiper-pagination"></div>
                        <div className="controll-recipes-useful__button-next  _icon-arrow-down"></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Catalog;
