import { FC } from 'react';
import s from './Footer.module.scss';
import logo from '../../Img/logo.svg'

const Footer: FC = () => {
    return (
        <div className={s.footer}>
            <div className={s.footer_location}>
                <a href="#"> <img src={logo} alt="logo" className={s.footer_img}/></a>
                <div className={s.footer__location_text}>
                    <p className={s.footer_location_location}>МЫ НАХОДИМСЯ ПО АДРЕСУ</p><br/>
                        <p className={s.footer_location_address}>г.Ростов-на-Дону, ул. Береговая 29а</p>
                        <a className={s.footer_location_tel} href="tel:+79282707161">8-928-270-71-61</a>
                </div>

            </div>
            <div className={s.working__hours}>
                <p className={s.working__hours_text}>РЕЖИМ РАБОТЫ</p>
                <p className={s.working__hours_time}>вс-чт 12:00-00:00<br/>
                    пт-сб 12:00-02:00</p>
            </div>
            <div className={s.live__music}>
                <p className={s.live__music_inner}>ЖИВАЯ МУЗЫКА</p>
                <p className={s.live__music_time}>КАЖДУЮ ПТ-СБ C 20:00 </p>
            </div>
        </div>
    );
};

export default Footer;