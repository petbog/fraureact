import { FC } from 'react';
import s from './TextInfo.module.scss';

const TextInfo: FC = () => {
    return (
        <div className={s.info}>
            <div className={s.info__title}>
                <h1 className=""><a id="bottom"></a>Добро пожаловать в ресторан Фрау Мюллер!</h1>
            </div>
            <div className={s.info__text}>
                Что может быть прекраснее, чем провести время или устроить празднество по тому или иному поводу в уютном
                стильном месте, где тебя накормят вкуснейшей едой и напоят отборными напитками! <br />

                Для жителей и гостей Ростова-на-Дону этот праздник может продолжаться каждый день. Ведь мясной ресторан Фрау
                Мюллер всегда готов обслужить на высшем уровне.<br />
                <div className={s.info__title_bottom}>
                    <p className="">Чем удивит Фрау Мюллер:</p>
                </div>
                <ul className="">
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
                </ul>
            </div>
        </div>
    );
};

export default TextInfo;