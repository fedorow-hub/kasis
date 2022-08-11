import s from './recept.module.scss';
import {Link, useParams} from "react-router-dom";


const Recept = (props) => {
    const {id} = useParams();
    let state = props.store.getState();
    let tempRecept = state.catalog.find(item => item.id == id);

    let ingredient = tempRecept.consist.map((el, i) => (
            <div className={s.tab_main__item}>
                <div className={s.tab_main__ingredient}>{el.ingredient}</div>
                <div className={s.tab_main__amount}>{el.amount}</div>
            </div>
        )
    )

    return (
        <main className={s.page}>
            <div className={s.page__header}>
                <div className={s.page__container}>
                    <nav>
                        <ul className={s.breadcrumbs__list}>
                            <li>
                                <Link to="/" className={s.breadcrumbs__link}>Главная</Link>
                            </li>
                            <li>
                                <Link to="/catalog" className={s.breadcrumbs__link}>Рецепты</Link>
                            </li>
                            <li>
                                <span>{tempRecept.title}</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <section className={s.page__recepi}>
                <div className={s.recepi_main__container}>
                    <div className={s.recepi_main__header}>
                        <h1 className={s.recepi_main__title}>{tempRecept.title}</h1>
                        <div className={s.recepi_main__like}>{tempRecept.like}</div>
                    </div>
                    <div></div>
                    <div className={s.recepi_main__body}>
                        <div >
                            <div className={s.item_sequence__photo}>
                                <img src={tempRecept.img} alt="Картинка"/>
                            </div>
                        </div>
                        <div data-da=".recepi-main__container,767.98,4" className={s.info_main}>
                            <div data-da=".recepi-main__da,767.98,1" className={s.info_main__top}>
                                <div className={s.info_main__extra}></div>
                                <div className={s.info_main__wrap}>
                                    <div className={s.info_main__item}>Порций: {tempRecept.portion}</div>
                                    <div className={s.info_main__item}>Время: {tempRecept.time}</div>
                                </div>
                            </div>
                            <h2 className={s.info_main__title}>Съставки:</h2>
                            <div>
                                {ingredient}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.page__sequence}>
                <div className={s.sequence_list__container}>
                    <h2 className={s.sequence_list__title}>Начин на приготвяне:</h2>
                    <ul>
                        <li className={s.sequence_list__item}>
                            <p className={s.item_sequence__content}>
                                {tempRecept.instruction}
                            </p>
                        </li>


                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Recept;