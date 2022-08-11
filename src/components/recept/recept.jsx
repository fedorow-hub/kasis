import s from './recept.module.scss';
import {Link, useParams} from "react-router-dom";


const Recept = (props) => {
    const {id} = useParams();
    let state = props.store.getState();
    let tempRecept = state.catalog.fullCatalog.find(item => item.id == id);

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
                            <li className={s.breadcrumbs__link}>
                                <Link to="/" className={s.breadcrumbs__link}>Главная</Link>
                                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.38086 1.70117L6.48757 6.80788L1.38086 11.9146" stroke="#C0C0C0" stroke-width="2"/>
                                </svg>
                            </li>
                            <li className={s.breadcrumbs__link}>
                                <Link to="/catalog" className={s.breadcrumbs__link}>Рецепты</Link>
                                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.38086 1.70117L6.48757 6.80788L1.38086 11.9146" stroke="#C0C0C0" stroke-width="2"/>
                                </svg>
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
                        <div className={s.recepi_main__like}>
                            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.6 1.60035e-06C2.955 1.60035e-06 0 2.86955 0 6.40914C0 12.8183 7.8 18.6448 12 20C16.2 18.6448 24 12.8183 24 6.40914C24 2.86955 21.045 1.60035e-06 17.4 1.60035e-06C15.168 1.60035e-06 13.194 1.07615 12 2.7233C11.3914 1.88149 10.5829 1.19448 9.64292 0.720439C8.70294 0.246394 7.65918 -0.00072561 6.6 1.60035e-06Z" fill="#FFB547"/>
                            </svg>
                            {tempRecept.like}
                        </div>
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
                                    <div className={s.info_main__item}>
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 8.49638L3.89655 11.3947M10.1212 1.33538C10.1606 1.817 10.3687 2.26923 10.7088 2.61231C11.0967 3.00054 11.3146 3.52702 11.3146 4.07598C11.3146 4.62493 11.0967 5.15142 10.7088 5.53965C10.321 5.92787 10.1031 6.45436 10.1031 7.00331C10.1031 7.55227 10.321 8.07875 10.7088 8.46698C11.0967 8.85521 11.3146 9.38169 11.3146 9.93065C11.3146 10.4796 11.0967 11.0061 10.7088 11.3943M12.4083 1C12.3669 1.57884 12.5581 2.17011 13 2.61231C13.3879 3.00054 13.6058 3.52702 13.6058 4.07598C13.6058 4.62493 13.3879 5.15142 13 5.53965C12.6121 5.92787 12.3942 6.45436 12.3942 7.00331C12.3942 7.55227 12.6121 8.07875 13 8.46698C13.3879 8.85521 13.6058 9.38169 13.6058 9.93065C13.6058 10.4796 13.3879 11.0061 13 11.3943M14.6593 1.10227C14.6518 1.38166 14.7013 1.65965 14.8048 1.91927C14.9082 2.17889 15.0634 2.4147 15.261 2.61231C15.6488 3.00054 15.8667 3.52702 15.8667 4.07598C15.8667 4.62493 15.6488 5.15142 15.261 5.53965C14.8731 5.92787 14.6552 6.45436 14.6552 7.00331C14.6552 7.55227 14.8731 8.07875 15.261 8.46698C15.6488 8.85521 15.8667 9.38169 15.8667 9.93065C15.8667 10.4796 15.6488 11.0061 15.261 11.3943M1 12.9925C1 19.6244 6.37228 25 13 25C19.6277 25 25 19.6244 25 12.9925H1Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        Порций: {tempRecept.portion}
                                    </div>
                                    <div className={s.info_main__item}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25C17.6609 22.25 22.25 17.6609 22.25 12C22.25 6.33908 17.6609 1.75 12 1.75ZM0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12Z" fill="black"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 3.5C11.5 3.22386 11.7239 3.00001 12 3C14.1899 2.99995 16.3047 3.79838 17.9482 5.2457C19.5917 6.69302 20.6512 8.68992 20.928 10.8623C20.9629 11.1362 20.7691 11.3866 20.4952 11.4215C20.2213 11.4564 19.9709 11.2626 19.936 10.9887C19.6899 9.05771 18.7482 7.28269 17.2874 5.99618C15.952 4.82019 14.2665 4.12615 12.5 4.01562V10.75C12.5 11.0261 12.2761 11.25 12 11.25C11.7239 11.25 11.5 11.0261 11.5 10.75V3.5ZM12.75 12C12.75 11.7239 12.9739 11.5 13.25 11.5H21.75C22.0261 11.5 22.25 11.7239 22.25 12C22.25 12.2761 22.0261 12.5 21.75 12.5H13.25C12.9739 12.5 12.75 12.2761 12.75 12Z" fill="black"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 11.25C11.5858 11.25 11.25 11.5858 11.25 12C11.25 12.4142 11.5858 12.75 12 12.75C12.4142 12.75 12.75 12.4142 12.75 12C12.75 11.5858 12.4142 11.25 12 11.25ZM10.25 12C10.25 11.0335 11.0335 10.25 12 10.25C12.9665 10.25 13.75 11.0335 13.75 12C13.75 12.9665 12.9665 13.75 12 13.75C11.0335 13.75 10.25 12.9665 10.25 12Z" fill="black"/>
                                        </svg>
                                        Время: {tempRecept.time}
                                    </div>
                                </div>
                            </div>
                            <h2 className={s.info_main__title}>
                                Съставки:</h2>
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
                            <img src={require('./../../img/any/cооcking.jpg')}/>
                        </li>


                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Recept;