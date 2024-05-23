import cls from './Preview.module.scss';
import { FC } from 'react';

const Preview: FC = () => {
    return (
        <div className={cls.Preview}>
            <div className="">
                <div className={cls.box}>
                    <h1 className={cls.Preview_one}>ФРАУ </h1>
                    <p className={cls.Preview_subtitle}>20 лет мы готовим рульки безупречного качества для вас</p>
                </div>

                <h3 className={cls.Preview_two}> МЮЛЛЕР</h3>

            </div>
        </div>
    );
};

export default Preview;