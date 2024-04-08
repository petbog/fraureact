import s from './SliceProduct.module.scss';
import { FC } from 'react';

const SliceProduct: FC = (props) => {
    // const { title, nameProduct, Ingredients, price } = props

    return (
        <div className={s.kitchen__box}>
            <div className={s.kitchen__title}>
                <h3><i>САЛАТЫ</i></h3>
            </div>
            <div className={s.kitchen__text_box}>
                <div className={s.kitchen__text}>
                    <p>Салат с морепродуктами
                        <span className={s.recipe_hiding}>( мидии киви, креветки, щупальца кальмар, микс салатов)</span>
                    </p>
                    <p className={s.price_text}>150гр/750р</p>
                </div>
            </div>
        </div>
    );
};

export default SliceProduct;