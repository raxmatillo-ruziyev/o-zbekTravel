import React, { useEffect } from 'react'
import './Service.scss'
import Card from '../Card/Card'
import card1 from '../../assets/card1.jpeg'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.jpeg'
import { useTranslation } from 'react-i18next'
const Service = () => {
    const {t,i18n}= useTranslation();
    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
        i18n.changeLanguage(savedLanguage);
      }, []);
  return (
    <>
    <div className="service">
        <div className="container">
            <h1 className="service-title">{t("35")}</h1>
            <p className="service-text">{t("36")}</p>
            <ul className="service-list">
                <li className="service-item">
                    <Card cardTitle={t("30")}  card1={card1} cardText={t("31")}/>
                </li>
                <li className="service-item">
                <Card cardTitle={t("33")}  card1={card2} cardText={t("31")}/>
                </li>
                <li className="service-item">
                <Card cardTitle={t("34")}  card1={card3} cardText={t("31")}/>
                </li>
            </ul>
        </div>
    </div>
      
    </>
  )
}

export default Service
