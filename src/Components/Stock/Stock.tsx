import s from './Stock.module.scss';
import { FC } from 'react';

const Stock:FC = () => {
    return (
        <div className={s.Stock}>
            <div className={s.Stock_box}>
                <div className={s.Stock_item}>
                    <div className={s.Stock_container}>
                        <p className={s.Stock_title}></p>
                        <p className={s.Stock_text}></p>
                        <img src="" alt="" className={s.Stock_img} />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Stock;