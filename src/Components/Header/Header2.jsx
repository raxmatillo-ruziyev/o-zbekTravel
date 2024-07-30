import React from 'react'
import './Header.scss'
import Box from '../Box/Box'
import { useTranslation } from 'react-i18next'
import Button from '../Button/Button'
const Header2 = ({headerTitle,headerText}) => {
    const {t,i18n} =useTranslation();
  return (
    <>
    <div className="header2">
        <div className="container">
        <div className="header-box">
            <h1 className="header-title">{headerTitle}</h1>
            <p className="header-text">{headerText}</p>
            <ul className="header-list">
                <li className="header-item">
                  <Box boxTitle={t("11")} boxText={t("12")}/>
                </li>
                <li className="header-item">
                    <Box boxTitle={t("13")} boxText={t("14")}/>
                </li>
                <li className="header-item">
                    <Box boxTitle={t("15")} boxText={t("16")}/>
                </li>
            </ul>
            <ul className="header-next-list">
                <li className="header-next-item"><Button  name={t("17")} color={"#FF9548"}/></li>
                <li className="header-next-item"><Button name={t("18")} color={"#5EC2EC"}/></li>
            </ul>
        </div>
        </div>
    </div>
      
    </>
  )
}

export default Header2
