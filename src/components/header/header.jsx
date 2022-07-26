/*import React from 'react';*/
import s from './header.module.scss';
import {Link, NavLink} from "react-router-dom";

const Header =(props) => {
    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <Link to="" className={s.header__logo}>
                    <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.778 14.7538V20.2986H40.5V4.03735H40.778V13.0075V14.1843L41.6251 13.3674L51.3005 4.03735H51.6142L45.3693 10.0964L45.0554 10.401L45.3155 10.7526L52.3266 20.2314H51.8909L45.1797 11.0337L44.839 10.5667L44.426 10.9712L40.9282 14.3966L40.778 14.5436V14.7538Z" fill="black" stroke="black"/>
                        <path d="M64.1484 18.6194H63.9955C64.1034 18.5276 64.1938 18.4337 64.2691 18.3534C64.2917 18.3294 64.3126 18.307 64.3322 18.2859C64.4393 18.1712 64.5069 18.0988 64.5827 18.042L64.783 17.892V17.6418V14.4179V13.9179H64.283H64.1484H62.265C60.4119 13.9179 58.9652 14.1899 57.9141 14.7896C57.3829 15.0927 56.9749 15.4696 56.7033 15.9389C56.4318 16.4082 56.3166 16.9355 56.3166 17.5075C56.3166 17.9383 56.3953 18.3396 56.5824 18.7022C56.7703 19.0663 57.0522 19.362 57.4139 19.6028C58.1225 20.0744 58.9665 20.291 60.0453 20.291C60.4968 20.291 61.0216 20.2169 61.4812 20.064L61.3233 19.5895L61.4812 20.064C61.4913 20.0606 61.5015 20.0572 61.5117 20.0538C61.8956 19.9262 62.3723 19.7677 62.7789 19.4429C63.0852 19.1982 63.3936 19.0127 63.7328 18.8095C63.7492 18.7997 63.7654 18.7896 63.7812 18.7794C63.5017 19.055 63.194 19.2537 62.8632 19.4674C62.7748 19.5244 62.6849 19.5826 62.5933 19.6435C62.2217 19.8909 61.8578 20.0712 61.5017 20.1897C61.0713 20.333 60.7537 20.4328 60.5161 20.4328C60.3348 20.4328 60.125 20.4497 59.9324 20.4651C59.9203 20.4661 59.9082 20.467 59.8962 20.468C59.6832 20.485 59.4841 20.5 59.3054 20.5C58.8116 20.5 58.4126 20.4387 58.0223 20.2717C57.5617 20.0746 57.2089 19.8943 56.9269 19.669C56.6711 19.4648 56.4415 19.1342 56.2547 18.7612C56.1026 18.4575 56.0386 18.0764 56.0386 17.5746C56.0386 16.3424 56.5509 15.4193 57.6317 14.6998C58.7164 13.9778 60.3416 13.6418 62.7359 13.6418H64.2157H64.7157V13.1418V13.1226C64.7157 12.5993 64.7157 12.0988 64.6434 11.5934C64.571 11.0875 64.4154 10.5526 64.0309 10.1686C64.0249 10.1626 64.0189 10.1566 64.0128 10.1505C63.7534 9.89133 63.3688 9.5071 62.8919 9.26905C62.3717 9.00933 61.5895 8.94777 60.8525 8.94777C59.6671 8.94777 58.6839 9.15386 58.0317 9.5609C57.4933 9.89692 57.0534 10.4116 56.8698 11.097H56.607C56.7936 10.3518 57.1601 9.80397 57.6485 9.44933C58.2709 8.99736 59.3627 8.67163 60.8525 8.67163C61.6704 8.67163 62.2898 8.7964 62.847 8.98186C63.3668 9.15485 63.7816 9.44593 64.165 9.76492C64.4593 10.0098 64.6878 10.4366 64.8069 10.9125C64.9378 11.4354 65.061 12.0607 65.061 12.6716V20.1642H64.783V19.1194V18.6194H64.283H64.1484Z" fill="black" stroke="black"/>
                        <path d="M75.1594 11.5804L75.1594 11.5803L75.1496 11.5782C74.24 11.3836 73.4599 11.1241 72.8089 10.864C72.1859 10.6152 71.6836 10.303 71.2322 9.98099C70.864 9.7184 70.6435 9.34696 70.3669 8.86362C70.1629 8.50731 70.0966 8.07571 70.0966 7.50001C70.0966 6.89686 70.2169 6.37045 70.4473 5.91044C70.6776 5.45044 71.0272 5.03838 71.5106 4.67635C72.0095 4.30281 72.5587 3.99989 73.2257 3.81825C73.9307 3.62627 74.6933 3.5 75.5158 3.5C76.3384 3.5 77.101 3.62627 77.806 3.81825C78.5171 4.0119 79.1217 4.25971 79.5883 4.60916C80.0912 4.98573 80.5141 5.41269 80.8095 5.8847L81.2333 5.61942L80.8095 5.88471C81.0073 6.20072 81.1574 6.58259 81.274 7.00001H81.057C80.9232 6.63688 80.761 6.31316 80.6114 6.01436L80.6042 6C80.3411 5.47453 79.8434 5.07859 79.4252 4.80019C78.9859 4.50778 78.3955 4.21095 77.7894 4.05965C77.2337 3.92093 76.5161 3.77614 75.7177 3.77614C74.1256 3.77614 72.8535 4.05013 71.9202 4.74905C70.9976 5.43999 70.5092 6.32223 70.5092 7.50001C70.5092 8.01569 70.5826 8.48514 70.7468 8.89489C70.9317 9.35645 71.2879 9.69245 71.6388 9.97275C72.0245 10.2809 72.5484 10.5766 73.2055 10.7953C73.8222 11.0006 74.509 11.2063 75.3992 11.4116C75.6782 11.4811 75.9387 11.5331 76.1871 11.5827L76.1915 11.5836C76.445 11.6342 76.686 11.6824 76.9419 11.7463C77.4821 11.8811 78.0116 12.0134 78.4729 12.145C78.9178 12.2719 79.4159 12.4598 79.8421 12.7029C80.2982 12.9632 80.6573 13.206 80.9473 13.4956C81.2353 13.7832 81.4697 14.1318 81.6483 14.548C81.8252 14.96 81.9441 15.4305 81.9441 16.0299C81.9441 16.7072 81.8212 17.2898 81.5364 17.8017C81.2225 18.3659 80.8531 18.8549 80.3663 19.2802C79.8944 19.6924 79.293 19.9966 78.6132 20.1817C77.9188 20.3708 76.9542 20.5 76.1212 20.5C75.0089 20.5 73.9908 20.3684 73.2522 20.1226C72.4581 19.8583 71.7174 19.5439 71.1813 19.1275C70.6221 18.6933 70.2198 18.2225 69.9935 17.6574C69.8013 17.1777 69.6495 16.7094 69.5592 16.1941H69.8556C69.9996 16.8559 70.2185 17.4217 70.6094 17.9421L70.995 17.6524L70.6094 17.9421C71.0352 18.509 71.487 18.9699 72.0394 19.2851C72.5429 19.5724 73.1992 19.8652 73.9381 20.0127C74.644 20.1537 75.3494 20.2239 76.1212 20.2239C76.8825 20.2239 77.6845 20.1559 78.3643 19.9296C78.9627 19.7305 79.5879 19.5048 80.0734 19.1008C80.4995 18.7462 80.8858 18.3659 81.1965 17.823C81.5259 17.2474 81.5988 16.6791 81.5988 16.097C81.5988 15.4621 81.5298 14.9006 81.2769 14.3955C81.0226 13.8877 80.6075 13.4852 80.0686 13.1777C79.5624 12.8889 78.9254 12.6079 78.0953 12.3316C77.4022 12.1009 76.613 11.918 75.721 11.7112C75.5381 11.6688 75.3509 11.6254 75.1594 11.5804Z" fill="black" stroke="black"/>
                        <path d="M86.7868 20.2313H86.5088V9.00741H86.7868V20.2313ZM86.7868 4.91787H86.5088V3.97009H86.7868V4.91787Z" fill="black" stroke="black"/>
                        <path d="M98.2726 15.5153L98.0492 15.9627L98.2726 15.5153C98.2328 15.4954 98.1816 15.4672 98.1206 15.4334C97.8692 15.2945 97.4496 15.0626 96.9596 14.9402C96.6681 14.8675 96.3802 14.7817 96.055 14.6848C95.7715 14.6003 95.4596 14.5073 95.0925 14.4073C94.8507 14.3349 94.6304 14.2741 94.4281 14.2182C94.0251 14.1069 93.6931 14.0152 93.4029 13.8911C92.9132 13.6815 92.5126 13.506 92.2402 13.2884L91.9282 13.6791L92.2402 13.2884C91.9595 13.0642 91.7274 12.7773 91.5496 12.4813C91.4222 12.2693 91.3519 11.9177 91.3519 11.3284C91.3519 10.9502 91.4613 10.5565 91.6354 10.2089C91.8041 9.87188 92.019 9.60738 92.3398 9.39383C92.7051 9.15067 93.0565 8.97621 93.5291 8.85823C94.0242 8.73464 94.5213 8.67163 95.1569 8.67163C96.5848 8.67163 97.5548 8.93222 98.1847 9.33243C98.633 9.61726 98.9465 10.0729 99.1208 10.694H98.8571C98.6826 10.1354 98.3092 9.69205 97.8262 9.41645C97.2394 9.08161 96.3914 8.94777 95.3586 8.94777C94.8462 8.94777 94.4082 9.02067 94.0102 9.0869L93.9986 9.08885C93.5329 9.16633 93.1175 9.32608 92.772 9.58486C92.7434 9.60628 92.7145 9.62762 92.6854 9.64911C92.4611 9.81476 92.2241 9.98983 91.9992 10.2892C91.7182 10.6635 91.63 11.0449 91.63 11.4627C91.63 11.4667 91.63 11.4707 91.63 11.4746C91.6299 11.6768 91.6299 11.8795 91.723 12.1583C91.8265 12.4686 92.0288 12.7504 92.3683 13.0047L92.6681 12.6045L92.3683 13.0047C92.6883 13.2443 93.139 13.465 93.6149 13.6686C94.1281 13.8883 94.9015 14.0968 95.7689 14.2971C96.0132 14.3699 96.2612 14.4353 96.4907 14.4958C96.5805 14.5195 96.6675 14.5425 96.7503 14.5648C97.0608 14.6486 97.3163 14.7249 97.5162 14.8104C98.0059 15.02 98.4065 15.1955 98.6789 15.4131C98.9648 15.6415 99.1716 15.9112 99.2667 16.1486C99.3877 16.4506 99.4999 16.8548 99.4999 17.2388C99.4999 17.6868 99.3892 18.088 99.2041 18.5192C99.0409 18.8995 98.7614 19.2421 98.4021 19.541C98.0455 19.8377 97.6245 20.0794 97.134 20.2631C96.6786 20.4336 96.076 20.5 95.4259 20.5C93.97 20.5 92.9309 20.2079 92.2343 19.6916C91.6741 19.2764 91.2918 18.6837 91.1055 17.8731H91.3706C91.5354 18.5458 91.923 19.0694 92.4959 19.5143C93.2447 20.0958 94.2724 20.2239 95.4259 20.2239C95.9969 20.2239 96.5926 20.1536 97.0637 19.9968C97.4832 19.8572 97.8581 19.7093 98.2389 19.4812C98.7008 19.2045 98.8911 18.8239 99.0253 18.5556C99.0284 18.5494 99.0314 18.5433 99.0345 18.5373C99.2109 18.185 99.2892 17.7692 99.2892 17.3731C99.2892 16.9682 99.2076 16.6445 99.1289 16.4088C99.06 16.2024 98.9148 16.0196 98.7809 15.8859C98.639 15.7442 98.4616 15.6097 98.2726 15.5153Z" fill="black" stroke="black"/>
                        <path d="M12.0004 24C14.9985 24 17.4289 21.5767 17.4289 18.5875C17.4289 15.5983 14.9985 13.175 12.0004 13.175C9.00226 13.175 6.57178 15.5983 6.57178 18.5875C6.57178 21.5767 9.00226 24 12.0004 24Z" fill="#D83030"/>
                        <path d="M5.42856 17.3768C8.42668 17.3768 10.8571 14.9535 10.8571 11.9643C10.8571 8.9751 8.42668 6.55188 5.42856 6.55188C2.43044 6.55188 0 8.9751 0 11.9643C0 14.9535 2.43044 17.3768 5.42856 17.3768Z" fill="#D83030"/>
                        <path d="M18.5712 17.3768C21.5693 17.3768 23.9997 14.9535 23.9997 11.9643C23.9997 8.9751 21.5693 6.55188 18.5712 6.55188C15.5731 6.55188 13.1426 8.9751 13.1426 11.9643C13.1426 14.9535 15.5731 17.3768 18.5712 17.3768Z" fill="#D83030"/>
                        <path d="M12.0004 10.8249C14.9985 10.8249 17.4289 8.40167 17.4289 5.41244C17.4289 2.42322 14.9985 0 12.0004 0C9.00226 0 6.57178 2.42322 6.57178 5.41244C6.57178 8.40167 9.00226 10.8249 12.0004 10.8249Z" fill="#2FB204"/>
                    </svg>
                </Link>
                <nav className={s.body_header}>
                    <ul className={s.body_header__list}>
                        <li className={s.body_header__item}><NavLink to="/home">Закуски и тестени</NavLink></li>
                        <li className={s.body_header__item}><NavLink to="/profile">Салати и разядки</NavLink></li>
                        <li className={s.body_header__item}><a href="#">Основни ястия</a></li>
                        <li className={s.body_header__item}><a href="#">Аламинути и предястия</a></li>
                        <li className={s.body_header__item}><a href="#">Десерти</a></li>
                        <li className={s.body_header__item}><a href="#">Напитки</a></li>
                        <li className={s.body_header__item}><a href="#">Зимнени</a></li>
                    </ul>
                </nav>
                <div className={s.menu}>
                    <button type="button" className={s.iconMenu}><span></span></button>
                    <nav className="menu__body">
                        <ul className="menu__list">
                            <li className="menu__item"><a href="" className="menu__link"></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;

