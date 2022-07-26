import React from 'react';
import s from './filter.module.scss';

const Filter = (props) => {

    let newPost = React.createRef();

    let addRecept = () => {
        props.addRecept();
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
    }

    return (
        <section className={s.dishes_filter}>
            <div className={s.dishes_filter__container}>
                <form action="#" data-spollers className={s.form_filter}>
                    <textarea onChange={onPostChange} ref={newPost} type="text" name="form[]"    placeholder="Търси"
                           className={s.form_filter__input} value={props.newPostText}/>
                        <button onClick={addRecept} type="button" className={s.form_filter__button}>Всички рецепти</button>
                </form>
                <div className={s.dishes_filter__bottom}>
                    <div className={s.dishes_filter__ingredients}>
                        <button type="button" className={s.dishes_filter__ingredient_add}>
                            <span>Избери съставки</span></button>
                        <div className={s.dishes_filter__ingredients} data-da=".dishes-filter__adapt,767.98">
                            <button type="button" className={s.dishes_filter__ingredient}>Домати</button>
                            <button type="button" className={s.dishes_filter__ingredient}>Боб</button>
                            <button type="button" className={s.dishes_filter__ingredient}>Чушка</button>
                        </div>
                    </div>
                    <button className={s.dishes_filter__reset}>Примахни филтрите</button>
                </div>
                <div className="dishes-filter__adapt"></div>
            </div>
        </section>
    )
}
export default Filter;