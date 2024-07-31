import React, { useEffect } from 'react'
import './Section.scss'
import { useTranslation } from 'react-i18next'
import Box from '../Box/Box';
import Button from '../Button/Button';
const Section = () => {
    const { t, i18n } = useTranslation();
    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
        i18n.changeLanguage(savedLanguage);
      }, []);
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="section-box">
                        <h1 className="section-title">{t("26")}</h1>
                        <p className="section-text">{t("27")}</p>
                        <ul className="section-list">
                            <li className="section-item"><Box boxTitle={t("11")} boxText={t("12")} /></li>
                            <li className="section-item"><Box boxTitle={t("13")} boxText={t("14")} /></li>
                            <li className="section-item"><Box boxTitle={t("15")} boxText={t("16")} /></li>
                            <li className="section-item"><Box boxTitle={t("28")} boxText={t("16")} /></li>
                            <li className="section-item"><Box boxTitle={t("11")} boxText={t("12")} /></li>
                            <li className="section-item"><Box boxTitle={t("13")} boxText={t("14")} /></li>
                            <li className="section-item"><Box boxTitle={t("15")} boxText={t("16")} /></li>
                            <li className="section-item"><Box boxTitle={t("28")} boxText={t("16")} /></li>

                        </ul>
                        <a className="header-next-item"><Button name={t("29")} color={"#FF9548"}/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section
