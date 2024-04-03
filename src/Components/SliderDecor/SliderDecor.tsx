import Carousel from "nuka-carousel"
import s from './SliderDecor.module.scss';
import { FC } from 'react';


import decor1 from '../../Img/sl1-1 (1).jpg'
import decor2 from '../../Img/sl1-2 (1).jpg'
import decor3 from '../../Img/sl1-3 (1).jpg'
import decor4 from '../../Img/sl1-4 (1).jpg'




const SliderDecor: FC = () => {
    return (
        <Carousel>
            <img src={decor1} />
            <img src={decor2} />
            <img src={decor3} />
            <img src={decor4} />
        </Carousel>
    );
};

export default SliderDecor;