const ADD_RECEPT = 'ADD-RECEPT';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_INGREDIENT_FOR_FILTER = 'ADD-INGREDIENT-FOR-FILTER';
const REMOVE_FILTER = 'REMOVE-FILTER';


let store = {
    _state: {
        mainPage: {
            hero: [
                {
                    img: require('./../img/hero/1.jpg'),
                    title: "Боб в гювеч",
                    text: "Состав: боб, лук, морков, чушка, домат, чесън, червен, пипер, гьозум, сол, олио"
                },
                {
                    img: require('./../img/hero/2.jpg'),
                    title: "Пълнени гъби с бекон и кашкавал",
                    text: "Состав: големи гъби, глава лук, пушен бекон, кашкавал за поръсване"
                },
                {
                    img: require('./../img/hero/3.jpg'),
                    title: "Доматена манджа",
                    text: "Состав: домати, глава лук, морков, скилидки чесън, червен пипер, зехтин, захар, сол, черен пипер, самардала"
                }
            ],
            firstLineRecep: [
                {
                    img: require('./../img/first-line/1.jpg'),
                    title: "Фасоль острая",
                    text: "Состав: томаты, фасоль белая, томатная паста, соль, говядина",
                    like: 122,
                    time: "15-40 min"
                },
                {
                    img: require('./../img/first-line/2.jpg'),
                    title: "Фасоль острая",
                    text: "Состав: томаты, фасоль белая, томатная паста, соль, говядина",
                    like: 331,
                    time: "15-40 min"
                },
                {
                    img: require('./../img/first-line/3.jpg'),
                    title: "Фасоль острая",
                    text: "Состав: томаты, фасоль белая, томатная паста, соль, говядина",
                    like: 452,
                    time: "15-40 min"
                },
                {
                    img: require('./../img/first-line/4.jpg'),
                    title: "Фасоль острая",
                    text: "Состав: томаты, фасоль белая, томатная паста, соль, говядина",
                    like: 132,
                    time: "15-41 min"
                }
            ],
            seasonOffers: [
                {
                    img: require('./../img/third line/1.jpg'),
                    title: "Фасоль острая",
                    text: "Состав: томаты, фасоль белая, томатная паста, соль, говядина",
                    like: 1202,
                    time: "15-40 min"
                },
                {
                    img: require('./../img/third line/2.jpg'),
                    title: "Фасоль острая",
                    text: "Состав: томаты, фасоль белая, томатная паста, соль, говядина",
                    like: 3031,
                    time: "15-40 min"
                },
                {
                    img: require('./../img/third line/3.jpg'),
                    title: "Фасоль острая",
                    text: "Состав: томаты, фасоль белая, томатная паста, соль, говядина",
                    like: 4520,
                    time: "15-40 min"
                },
                {
                    img: require('./../img/third line/4.jpg'),
                    title: "Фасоль острая",
                    text: "Состав: томаты, фасоль белая, томатная паста, соль, говядина",
                    like: 1321,
                    time: "15-41 min"
                }
            ],
            posts: [
                {
                    img: require('./../img/second line/1.jpg'),
                    text: "Всички рецепти представяни на сайта,както са традиционни български,така и са заимствани от други народи,адаптирани са за българска кухня,доработени по вкусове и предпочитания,приготвени със собствени ръце на домашна кухня и запечатани с оригинални фотоснимки",
                    date: "02.02.2022"
                },
                {
                    img: require('./../img/second line/2.jpg'),
                    text: "Всички рецепти представяни на сайта,както са традиционни български,така и са заимствани от други народи,адаптирани са за българска кухня,доработени по вкусове и предпочитания,приготвени със собствени ръце на домашна кухня и запечатани с оригинални фотоснимки",
                    date: "02.02.2022"
                },
                {
                    img: require('./../img/second line/3.jpg'),
                    text: "Всички рецепти представяни на сайта,както са традиционни български,така и са заимствани от други народи,адаптирани са за българска кухня,доработени по вкусове и предпочитания,приготвени със собствени ръце на домашна кухня и запечатани с оригинални фотоснимки",
                    date: "02.02.2022"
                }
            ]
        },
        catalog: [
            {
                img: require('./../img/first-line/1.jpg'),
                title: "Фасоль острая",
                text: "Состав: томаты, фасоль белая, томатная паста, соль, говядина",
                like: 122,
                time: "15-40 min"
            },
            {
                img: require('./../img/first-line/2.jpg'),
                title: "Фасоль острая",
                text: "Состав: томаты, фасоль белая, томатная паста, соль, говядина",
                like: 331,
                time: "15-40 min"
            },
            {
                img: require('./../img/first-line/3.jpg'),
                title: "Фасоль острая",
                text: "Состав: томаты, фасоль белая, томатная паста, соль, говядина",
                like: 452,
                time: "15-40 min"
            },
            {
                img: require('./../img/first-line/4.jpg'),
                title: "Фасоль острая",
                text: "Состав: томаты, фасоль белая, томатная паста, соль, говядина",
                like: 132,
                time: "15-41 min"
            },
            {
                img: require('./../img/first-line/1.jpg'),
                title: "Фасоль острая",
                text: "Состав: томаты, фасоль белая, томатная паста, соль, говядина",
                like: 122,
                time: "15-40 min"
            },
            {
                img: require('./../img/first-line/2.jpg'),
                title: "Фасоль острая",
                text: "Состав: томаты, фасоль белая, томатная паста, соль, говядина",
                like: 331,
                time: "15-40 min"
            },
            {
                img: require('./../img/first-line/3.jpg'),
                title: "Фасоль острая",
                text: "Состав: томаты, фасоль белая, томатная паста, соль, говядина",
                like: 452,
                time: "15-40 min"
            },
            {
                img: require('./../img/first-line/4.jpg'),
                title: "Фасоль острая",
                text: "Состав: томаты, фасоль белая, томатная паста, соль, говядина",
                like: 132,
                time: "15-41 min"
            }
        ],
        dropMenuIngredients: [
            'Чушки', 'Авокадо', 'Боб', 'Домати', 'Ориз', 'Броколи', 'Гъби', 'Кайма',
            'Картофи', 'Тиквички', 'Яйца', 'Спанак', 'Цвекло', 'Тиква', 'Краставици', 'Кашкавал', 'Бекон', 'Будгур'
        ],
        ingredientsForFilter: []
        //newPostText: 'newRecept'
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer; //паттерн "Наблюдатель"
    },

    dispatch(action) {
        if(action.type === ADD_RECEPT){
            let arrItem = {
                img: require('./../img/first-line/4.jpg'),
                title: this._state.newPostText,
                text: this._state.newPostText,
                like: 132,
                time: "15-41 min"
            }
            this._state.catalog.push(arrItem);
            this._state.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_INGREDIENT_FOR_FILTER) {
            this._state.ingredientsForFilter.push(action.newIngredient);
            this._callSubscriber(this._state);
        } else if (action.type === REMOVE_FILTER) {
            this._state.ingredientsForFilter.splice(0, this._state.ingredientsForFilter.length);
            this._callSubscriber(this._state);
        }

    }
}

export const actionCreatorAddIngredientsForFilter = (ingredient) => {
    return {
        type: ADD_INGREDIENT_FOR_FILTER,
        newIngredient: ingredient
    }
}

export const actionCreatorRemoveFilter = () => ({type: REMOVE_FILTER})

export const actionCreatorAddRecept =() => ({type: ADD_RECEPT})

export const actionCreatorUpdateNewPostText = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default store;
Window.store = store;

