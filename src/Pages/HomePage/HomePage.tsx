import s from './HomePage.module.scss'
import TextInfo from '../../Components/TextInfo/TextInfo'
import { FC } from 'react'
import Footer from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import Preview from '../../Components/Preview/Preview'
import Parallax from '../../Components/Parallax/ParallaxMain'
import Stock from '../../Components/Stock/Stock'

import imgParallaxTopMain from '../../Img/sl1-1 (1).jpg'


const HomePage: FC = () => {
    return (
        <div className={s.HomePage}>
            <div className={s.header_img}>
                <Header />
                <Preview />
            </div>
            <div className={s.img_container}>
                <div className={s.container}>
                    <TextInfo />
                </div>
                <div className={s.parallaxContainer}>
                    <Parallax background={imgParallaxTopMain} title={'НАШИ АКЦИИ'} />
                </div>
                <div className={s.container}>
                    <Stock />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage