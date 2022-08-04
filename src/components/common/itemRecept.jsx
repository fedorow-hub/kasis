import s from './itemRecept.module.scss';
import {Link} from "react-router-dom";

const ItemRecept = (props) => {

    const template = props.state.map((el, i) => (
        <li key={i} className={`${s.item_recipe} swiper-slide`}>
            <Link to="" className={s.item_recipe__link}>
                <div className={s.item_recipe__image_ibg}>
                    <img src={el.img} className="" alt="Изображение"/>
                </div>
                <div className={s.item_recipe__content}>
                    <h3 className={s.item_recipe__title}>{el.title}</h3>
                    <div className={s.item_recipe__composition}>{el.text}</div>
                    <div className={s.item_recipe__action}>
                        <div className={s.item_recipe__like}>{el.like}</div>
                        <div className={s.item_recipe__time}>{el.time}</div>
                    </div>
                </div>
            </Link>
        </li>
    ));

    return (
        template
    )
}

export default ItemRecept;