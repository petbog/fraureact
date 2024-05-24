import Footer from '../../Components/Footer/Footer';
import SliceProduct from '../../Components/SliceProduct/SliceProduct';
import s from './Menu.module.scss';
import { FC } from 'react';




const Menu: FC = () => {
    return (
        <div className={s.Menu}>
            <div className={s.header_img}>
                {/* <Header /> */}
            </div>
            <div className={s.img_container}>
                <header className={s.header__top}>
                    <div id="bottom" className={s.container}>
                        {/* <SliceProduct /> */}
                    </div>
                </header>
                <Footer />
            </div>
        </div>
    );
};

export default Menu;