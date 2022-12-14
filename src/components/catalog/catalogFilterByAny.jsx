import s from "./catalog.module.scss";
import {Link} from "react-router-dom";
import ItemRecept from "../common/itemRecept";
import FilterContainer from "../mainPage/filter/filterContainer";

const CatalogFilterByAny = (props) => {

    let state = props.store.getState().catalog.filtredCatalog;

    return (
        <main className={s.page}>
            <div className={s.page__header}>
                <div className={s.page__container}>
                    <nav>
                        <ul className={s.breadcrumbs__list}>
                            <li className="breadcrumbs__item">
                                <Link to="/" className={s.breadcrumbs__link}>Главная</Link>
                            </li>
                            <li className="breadcrumbs__item">
                                <span className="breadcrumbs__current">Рецепти</span>
                            </li>
                        </ul>
                    </nav>
                    <h1 className={s.page_title}>Избор на рецепти</h1>
                </div>
            </div>
            <FilterContainer store = {props.store}/>
            <section className={s.seasonal_recipes}>
                <div className={s.page__container}>
                    <ul className={s.recepy_all}>
                        <ItemRecept state={state}/>
                    </ul>

                </div>
            </section>
        </main>
    )
}

export default CatalogFilterByAny;
