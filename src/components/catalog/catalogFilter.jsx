import s from "./catalog.module.scss";
import {Link, useParams} from "react-router-dom";
import ItemRecept from "../common/itemRecept";
import FilterContainer from "../mainPage/filter/filterContainer";

const CatalogFilter = (props) => {

    const {filter} = useParams();
    let state = props.store.getState();
    let tempListRecepts = state.catalog.fullCatalog.filter(item => item.category == filter);

    return (
        <main className={s.page}>
            <div className={s.page__header}>
                <div className={s.page__container}>
                    <nav>
                        <ul className={s.breadcrumbs__list}>
                            <li className={s.breadcrumbs__link}>
                                <Link to="/" className={s.breadcrumbs__link}>Главная</Link>
                                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.38086 1.70117L6.48757 6.80788L1.38086 11.9146" stroke="#C0C0C0" stroke-width="2"/>
                                </svg>
                            </li>
                            <li className="breadcrumbs__item">
                                <span className="breadcrumbs__current">Рецепти</span>
                            </li>
                        </ul>
                    </nav>
                    <h1 className={s.page_title}>{filter}</h1>
                </div>
            </div>
            <FilterContainer store = {props.store}/>
            <section className={s.seasonal_recipes}>
                <div className={s.page__container}>
                    <ul className={s.recepy_all}>
                        <ItemRecept state={tempListRecepts}/>
                    </ul>

                </div>
            </section>
        </main>
    )
}

export default CatalogFilter;
