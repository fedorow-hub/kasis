let store = {
    _state: {
        mainPage: {
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
                    tex: "Состав: томаты, фасоль белая, томатная паста, соль, говядина",
                    lik: 452,
                    tim: "15-40 min"
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
        newPostText: 'newRecept'
    },

    getState() {
        return this._state;
    },

    addRecept() {
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
    },

    _callSubscriber() {

    },

    updateNewPostText(newText) {
        this._state.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe (observer) {
        this._callSubscriber = observer; //паттерн "Наблюдатель"
    }
}

export default store;
Window.store = store;

