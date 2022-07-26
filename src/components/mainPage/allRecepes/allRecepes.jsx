import s from './allRecepes.module.scss';
import {Link} from "react-router-dom";
import ItemRecept from "../../common/itemRecept";

const AllRecep = (props) => {

    return (
        <section className={s.recipes_all}>
            <div className={s.recipes_all__container}>
                <div className="swiper">
                    <ul className={`${s.recipes_all__list} swiper-wrapper`}>
                        <ItemRecept state={props.state} />
                    </ul>
                </div>
                <Link to="catalog" type="button" className={`${s.recipes_all__button} btn`}>Виж всички рецепти</Link>
            </div>
        </section>
    )
}

export default AllRecep;
