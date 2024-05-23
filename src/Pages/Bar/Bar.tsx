import Footer from '../../Components/Footer/Footer';
import s from './Bar.module.scss';
import { FC } from 'react';

const Bar: FC = () => {
    return (
        <div className={s.Bar}>
            <div className={s.header_img}>
                {/* <Header /> */}
            </div>
            <div className={s.img_container}>
                <header className={s.header__top}>
                    <div id="bottom" className={s.container}>

                    </div>
                </header>
                <Footer />
            </div>
        </div>
    );
};

export default Bar;