import { FC } from 'react';
import s from './TextInfo.module.scss';
import { motion } from 'framer-motion'
import photo from '../../Img/Изображение WhatsApp 2024-05-24 в 19.54.52_34def4ed.jpg'

const TextInfo: FC = () => {



    return (
        <div className={s.info}>
            <div className={s.info__box}>
                <div className={s.info_img}>
                    <img className={s.info_img_item} src={photo} alt="" />
                </div>
                <div className="">
                    <p
                        className={s.info__title}>Добро пожаловать в<br /> Фрау Мюллер!
                    </p>
                    <p
                        className={s.info__text}>
                        Что может быть прекраснее, чем провести время или устроить празднество по тому или иному поводу в уютном
                        стильном месте, где тебя накормят вкуснейшей едой и напоят отборными напитками! <br />

                        Для жителей и гостей Ростова-на-Дону этот праздник может продолжаться каждый день. Ведь мясной ресторан Фрау
                        Мюллер всегда готов обслужить на высшем уровне.<br />
                    </p>
                </div>

            </div>

        </div>
    );
};

export default TextInfo;