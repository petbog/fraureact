import Carousel from "nuka-carousel"
import './SliderDecor.css';
import { FC } from 'react';


import decor1 from '../../Img/sl1-1 (1).jpg'
import decor2 from '../../Img/sl1-2 (1).jpg'
import decor3 from '../../Img/sl1-3 (1).jpg'
import decor4 from '../../Img/sl1-4 (1).jpg'


const arr = [decor1, decor2, decor3, decor4]

const SliderDecor: FC = () => {

    const params = {
        // autoplay:true,
        defaultControlsConfig: {
            containerClassName: 'containerClassName',
            prevButtonClassName: 'prevButtonClassName',
            nextButtonClassName: 'nextButtonClassName',
            pagingDotsClassName: 'pagingDotsClassName',

        }
    }

    return (
        <div>
            <Carousel {...params}>
                {
                    arr.map((item, i) => (
                        <img src={item} key={i} />
                    ))
                }
            </Carousel>
        </div>
    );
};

export default SliderDecor;