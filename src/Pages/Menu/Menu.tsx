import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import s from './Menu.module.scss';
import { FC } from 'react';




const Menu: FC = () => {
    return (
        <div className={s.Menu}>
            <div className={s.header_img}>
                <Header />
            </div>
            <div className={s.img_container}>
                <header className={s.header__top}>
                    <div className={s.container}>

                    </div>
                </header>
                <Footer />
            </div>
        </div>
    );
};

export default Menu;