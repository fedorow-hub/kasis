import ingredientForFilterReducer from "./filter-reducer";
import catalogReducer from "./catalog-reducer";
import mainPageReducer from "./mainPage-reducer";

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
                category: 'Супи',
                img: require('./../img/catalog/1.jpg'),
                title: "Картофена крем-супа",
                text: "Съединение: картофи, лук, морков, чесън, готварска сметана 18%",
                like: 0,
                portion: 4,
                time: "30 min",
                consist: [
                    {ingredient: 'картофи', amount: '1кг' },
                    {ingredient: 'лук', amount: '1 глава' },
                    {ingredient: 'морков', amount: '1' },
                    {ingredient: 'чесън', amount: '3-4 скилидки' },
                    {ingredient: 'готварска сметана 18%', amount: '250 мл' }
                ],

            },
            /*{
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
            }*/
        ],
        filter: {
            dropMenuIngredients: [
                'Чушки', 'Авокадо', 'Боб', 'Домати', 'Ориз', 'Броколи', 'Гъби', 'Кайма',
                'Картофи', 'Тиквички', 'Яйца', 'Спанак', 'Цвекло', 'Тиква', 'Краставици', 'Кашкавал', 'Бекон', 'Будгур'
            ],
            ingredientsForFilter: [],
            userSearch: ''
        }
    },
    _callSubscriber() {},

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer; //паттерн "Наблюдатель"
    },

    dispatch(action) {
        this._state.mainPage = mainPageReducer(this._state.mainPage, action);
        this._state.catalog = catalogReducer(this._state.catalog, action);
        this._state.filter = ingredientForFilterReducer(this._state.filter, action);

        this._callSubscriber(this._state);
    }
}

export default store;
Window.store = store;

