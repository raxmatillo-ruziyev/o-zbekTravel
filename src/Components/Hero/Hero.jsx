import React from 'react'
import './Hero.scss'
import { useTranslation } from 'react-i18next'
const Hero = ({iframe}) => {
    const {t,i18n} = useTranslation();
  return (
    <>
    <div className="hero">
        <div className="container">
            <h1 className="hero-title">{t("22")}</h1>
            <div className='hero-vidio'>{iframe}</div>
        </div>
    </div>
      
    </>
  )
}

export default Hero
