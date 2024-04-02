import Header from '../../Components/Header/Header'
import s from './HomePage.module.scss'
import TextInfo from '../../Components/TextInfo/TextInfo'
import { FC } from 'react'
import PreloaderInfo from '../../Components/PreloaderInfo/PreloaderInfo'
import Footer from '../../Components/Footer/Footer'


const HomePage: FC = () => {
    return (
        <div className={s.HomePage}>
            <div className={s.header_img}>
                <Header />
            </div>
            <div className={s.img_container}>
                <header className={s.header__top}>
                    <div className={s.container}>
                        <TextInfo />
                        <PreloaderInfo />
                    </div>
                </header>
                <Footer/>
            </div>
        </div>
    )
}

export default HomePage