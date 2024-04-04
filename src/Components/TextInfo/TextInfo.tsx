import { FC } from 'react';
import s from './TextInfo.module.scss';
import { motion } from 'framer-motion'

const TextInfo: FC = () => {

    const textAnimation = {
        hidden: {
            x: -400,
            opacity: 0
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.3 }
        }),
    }






    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={s.info}>
            <div className={s.info__title}>
                <motion.h1
                    variants={textAnimation}
                    custom={1}

                    className=""><a id="bottom"></a>Добро пожаловать в ресторан Фрау Мюллер!</motion.h1>
            </div>
            <motion.div
                variants={textAnimation}
                custom={2}

                className={s.info__text}>
                Что может быть прекраснее, чем провести время или устроить празднество по тому или иному поводу в уютном
                стильном месте, где тебя накормят вкуснейшей едой и напоят отборными напитками! <br />

                Для жителей и гостей Ростова-на-Дону этот праздник может продолжаться каждый день. Ведь мясной ресторан Фрау
                Мюллер всегда готов обслужить на высшем уровне.<br />
                <div className={s.info__title_bottom}>
                    <motion.p
                        variants={textAnimation}
                        custom={3}

                        className="">Чем удивит Фрау Мюллер:</motion.p>
                </div>
                <motion.ul
                    variants={textAnimation}
                    custom={4}

                    className="">
                    <li > Наверное, в фирменном заведении нет ничего такого, что бы не удивило и не порадовало даже
                        самых взыскательных
                        гостей.<br /></li>
                    <li > Один взгляд – и вы влюбляетесь в эту обстановку и атмосферу. Ведь интерьер ресторана
                        выполнен
                        в типично
                        классическом европейском дизайне. Какой бы зал вы ни посетили, заказав торжество в ресторане, везде
                        будет
                        уютно и комфортно.<br /></li>
                    <li > Отдельных слов заслуживают видовые характеристики. Ведь вы, заказав блюда, будете дожидаться
                        их, а потом и
                        вкушать с удовольствием, любуясь могучими водами Дона, на который смотрят окна Фрау Мюллер в
                        Ростове.<br />
                    </li>
                </motion.ul>
            </motion.div>
        </motion.div>
    );
};

export default TextInfo;