import s from './Header.module.scss'
import './activ.css'
import logo from '../../Img/logo.svg'
import arrow from '../../Img/arrow2.png'
import { NavLink } from 'react-router-dom'
import { FC, useState } from 'react'
import { Path } from '../../Paths/Paths'
import Poppup from '../Poppup/Poppup'

const Header: FC = () => {

    const [style, setStyle] = useState<boolean>(false)
    const [PoppupWindow, setPoppupWindow] = useState<boolean>(false)


    const handleStyle = () => {
        setStyle(prev => !prev)
    }

    const handlePoppup = () => {
        setPoppupWindow(prev => !prev)
    }

    return (
        <div className={s.Header}>
            <div className={s.container}>
                <div className={s.header__top}>
                    <div className={s.header__img}>
                        <img src={logo} className={s.header__logoImg} alt="logo" />
                    </div>
                    <div className={s.header__nav}>
                        <button onClick={handleStyle}
                            className={style ? `${s.header__nav_btn} ${s.list__activ}` : s.header__nav_btn}>
                            <span></span>
                        </button>
                        <ul className={style ? `${s.list} ${s.list__activ}` : s.list}>
                            <li className={`${s.header__navList} ${s.disabel}`}></li>
                            <li className={`${s.header__navList} `}><NavLink to={Path.Home}>Главная </NavLink></li>
                            <li className={s.header__navList}><NavLink to={Path.Menu}>Меню</NavLink></li>
                            <li className={s.header__navList}><NavLink to={Path.Bar}>Бар</NavLink></li>
                            <li className={s.header__navList}><NavLink to={Path.Wine}>Винная карта</NavLink></li>
                            <li onClick={handlePoppup} className={s.header__navList}>Забронировать стол</li>
                        </ul>
                    </div>
                </div>
                <div className={s.header__bottom}>
                    <a className={s.bottom__a} href="#bottom">
                        <div className={s.arrow}>
                            <img className={`${s.arrow__img} ${s.one}`} src={arrow} alt="arrow" />
                        </div>
                        <div className={s.arrow}>
                            <img className={`${s.arrow__img} ${s.two}`} src={arrow} alt="arrow" />
                        </div>
                    </a>
                </div>
            </div>

            {
                PoppupWindow ? <Poppup PoppupWindow={PoppupWindow}  setPoppupWindow={setPoppupWindow}/> : ''
            }
        </div>
    )
}


export default Header