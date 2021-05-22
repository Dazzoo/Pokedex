import style from './PreloaderRainbow.module.css'
import React from 'react'
import Rainbow from '../../../assets/Rainbow.gif'


export const PreloaderRainbow = () => {
    return (
        <div className={style.RainbowWrapper}  >
            <img className={style.Rainbow}  src={Rainbow}/>
        </div>
    )
}