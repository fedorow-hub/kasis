import s from "./posts.module.scss";


const Posts = (props) => {

    const template = props.state.map(el=>(
        <div className={`${s.seasonal_recipes__list} swiper-slide`}>
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
                <div className="recipes-useful__slider swiper">
                    <div className={`${s.recipes_useful__list} swiper-wrapper`}>
                        {template}
                    </div>
                    <div className="recipes-useful__controll controll-recipes-useful">
                        <div className="controll-recipes-useful__button-prev  _icon-arrow-down"></div>
                        <div className="controll-recipes-useful__patination swiper-pagination"></div>
                        <div className="controll-recipes-useful__button-next  _icon-arrow-down"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Posts;