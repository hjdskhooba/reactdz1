import React from 'react'
import 'animate.css'
import '../MainMain/main.css'
import mainVideo from '../../assets/tipovidos.png'
import kratos from '../../assets/Frame 19.png'
import boy from '../../assets/Frame 20.png'
import witch from '../../assets/Frame 21.png'
import hore from '../../assets/Frame 22.png'
import slidernext from '../../assets/seta.svg'

const MainMain = () => {
    return (
    <div className='main'>
        <div className='container'>
            <div className='first__block'>
                <div className='first__block__inner'>
                    <div className='first__block__left'>
                        <h2 className='first__block__title'>Um mundo mais sombrio e primitivo</h2>
                        <p className='first__block__subtitle'>
                        Do mármore e colunas ornadas do Ólimpo para as florestas, este é um<br/> reino novo, com suas próprias espécies de criaturas, monstros e deuses
                        </p>
                        <a href='' className='first__block__btn1'>Buy now</a>
                        <a href='' className='first__block__btn2'>Learn more</a>
                    </div>
                    <img className='first__block__video' src={mainVideo} alt='' />
                </div>
            </div>
            <div className='second__block'>
                <h3 className='second__block__title'>Os maiores heróis dos Noves Reinos</h3>
                <div className='slider'>
                    <span className='slider__prev'><img src={slidernext} alt='' /></span>
                    <div className='slider__item animated__animated animated__slideInLeft'>
                        <img className='slider__item__img' width="250" height="380" src={kratos} alt='' />
                    </div>
                    <div className='slider__item'>
                        <img className='slider__item__img' width="250" height="380" src={boy} alt='' />
                    </div>
                    <div className='slider__item'>
                        <img className='slider__item__img witchimg' width="250" height="380" src={witch} alt='' />
                    </div>
                    <div className='slider__item'>
                        <img className='slider__item__img' width="250" height="380" src={hore} alt='' />
                    </div>
                    <span className='slider__next'><img src={slidernext} alt='' /></span>
                </div>
            </div>
        </div>
    </div>)
} 

export default MainMain

