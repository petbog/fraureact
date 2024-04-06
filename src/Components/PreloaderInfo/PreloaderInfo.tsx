import s from './PreloaderInfo.module.scss';
import chef from '../../Img/chef.jpg'
import { motion } from 'framer-motion'

const PreloaderInfo = () => {


    const textAnimation = {
        hidden: {
            x: -400,
            opacity: 0
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.3 }
        }),
    }

    const hidenText = {
        hidden: {
            opacity: 0
        },
        visible: (custom: number) => ({
            opacity: 1,
            transition: { delay: custom * 0.3 }
        }),
    }

const rigthImg= {
    hidden: {
        x: 1200,
        opacity: 0
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 }
    }),
}


    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
        >
            <div className={s.menu}>
                <div className={s.menu__title}>
                    <motion.p
                        variants={hidenText}
                        custom={3}

                    >Меню ресторана Фрау Мюллер</motion.p>
                </div>
                <div className={s.preloader}>
                    <motion.div
                        variants={textAnimation}
                        custom={2}

                        className={s.preloader_text}>
                        Шеф-повар Александр, предложит на Ваш выбор меню, в котором преобладают блюда европейской кухни,
                        отличный выбор мяса, свежих овощей, изумительных десертов,
                        а горячая донская уха придется по вкусу самым изысканным гурманам!
                        Для семейного отдыха с детьми готовы предложить блюда, которые дети всегда внимательно и с восторгом
                        выбирают из детского меню
                    </motion.div>
                    <motion.div className={s.preloader_img}
                        variants={rigthImg}
                        custom={2}

                    >
                        <img src={chef} alt="chef" className="" />
                    </motion.div>
                </div>
                <div className={s.menu_description}>
                    <motion.div className={s.menu_description_box} 
                    variants={hidenText}
                    custom={3}
                    >
                        <p className={s.menu_description_text}>
                            Все люди разные и если кто-то любит шумные компании, веселые вечеринки,
                            то другие предпочитают тихие, скромные места с качественной, изысканной кухней
                            . Есть такие, кто любит ходить только в те заведения, где играет живая музыка – ресторан
                            «Фрау Мюллер» готов учесть все пожелания наших гостей, для Вас открыты несколько залов, летняя
                            терраса,
                            а великолепный вид из окна будет радовать Вас и Ваших близких! В пятницу и субботу Ваш ужин дополнит
                            музыкальное
                            сопровождение в исполнении профессионального музыканта.<br />
                            Для тех, кто хочет расслабиться, отдохнуть, приятно провести время и в то же время оценить шедевры
                            профессиональных поваров,
                            ресторан «Фрау Мюллер» всегда держит свои двери распахнутыми.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default PreloaderInfo;