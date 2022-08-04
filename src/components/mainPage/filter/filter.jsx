import React from 'react';
import s from './filter.module.scss';
import {
    actionCreatorAddRecept,
    actionCreatorUpdateNewPostText,
    actionCreatorAddIngredientsForFilter,
    actionCreatorRemoveFilter
} from "../../../redux/state";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


const Filter = (props) => {

    let ingredient = React.createRef();
    function addToFilter(key) {
        let listOfIngredients = spollerActive.current;
        let button = buttonActive.current;
        listOfIngredients.className = s.dishes_filter__spoller;
        button.className = s.dishes_filter__ingredient_add;
        let temp = props.dropMenuIngredients[key];
        props.dispatch(actionCreatorAddIngredientsForFilter(temp));
    }

    function removeFilters() {
        props.dispatch(actionCreatorRemoveFilter())
    }

    const listOfIngredients = props.dropMenuIngredients.map((el, i) => (
        <li ref={ingredient} className={s.dishes_filter__link} value={el}>
            <a onClick={() => addToFilter(i)}>{el}</a>
        </li>
    ));

    const ingredientsForFilter = props.ingredientsForFilter.map((el, i) => (
        <li key={i} className={s.dishes_filter__ingredient}>{el}</li>
    ));

    let newPost = React.createRef();

    let addRecept = () => {
        props.dispatch(actionCreatorAddRecept());
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.dispatch(actionCreatorUpdateNewPostText(text));
    }

    let spollerActive = React.createRef();
    let buttonActive = React.createRef();

    function showIngredients() {
        let listOfIngredients = spollerActive.current;
        let activeButton = buttonActive.current;
        listOfIngredients.className = `${s.dishes_filter__spoller} ${s.dishes_filter__spoller_active}`;
        activeButton.className = `${s.dishes_filter__ingredient_add} ${s.dishes_filter__ingredient_add_active}`;
    }

    return (
        <section className={s.dishes_filter}>
            <div className={s.dishes_filter__container}>
                <form action="#" data-spollers className={s.form_filter}>
                    <textarea onChange={onPostChange} ref={newPost} type="text" name="form[]" placeholder="Търси"
                              className={s.form_filter__input} value={props.newPostText}/>
                    <button onClick={addRecept} type="button" className={s.form_filter__button}>Всички рецепти</button>
                </form>
                <div className={s.dishes_filter__bottom}>
                    <div className={s.dishes_filter__ingredients}>
                        <button ref={buttonActive} onClick={showIngredients} type="button" className={s.dishes_filter__ingredient_add}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M14 27C21.1797 27 27 21.1797 27 14C27 6.8203 21.1797 1 14 1C6.8203 1 1 6.8203 1 14C1 21.1797 6.8203 27 14 27ZM14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
                                      fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 22V6H14.5V22H13.5Z"
                                      fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 13.5L22 13.5L22 14.5L6 14.5L6 13.5Z"
                                      fill="black"/>
                            </svg>
                            <span>Избери съставки</span>
                        </button>

                        <ul className={s.dishes_filter__spoller} ref={spollerActive}>
                            {listOfIngredients}
                        </ul>

                        <ul className={s.dishes_filter__ingredients} data-da=".dishes-filter__adapt,767.98">
                            {ingredientsForFilter}
                        </ul>
                    </div>
                    <button onClick={removeFilters} className={s.dishes_filter__reset}>Примахни филтрите</button>
                </div>
                <div className="dishes-filter__adapt"></div>
            </div>
        </section>
    )
}
export default Filter;