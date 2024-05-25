import s from './Stock.module.scss';
import { FC } from 'react';

const arrInfoStock = [
    { "title": "каждый понедельник", "text": "Стейки по себестоимости", "img": '' },
    { "title": "живая музыка", "text": "каждую пятницу и субботу с 20:00" },
    { "title": "10%", "text": "Скидка 10% в день рождения и в течение недели после" },
]


const Stock: FC = () => {
    return (
        <div className={s.Stock}>
            <div className={s.Stock_box}>
                <div className={s.Stock_item}>
                    {
                        arrInfoStock.map((item, i) => (
                            <div key={i} className={s.Stock_container}>
                                <p className={s.Stock_title}>{item.title}</p>
                                <p className={s.Stock_text}>{item.text}</p>
                                {
                                    item.img && <img src={item.img} alt="" className={s.Stock_img} />
                                }

                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Stock;