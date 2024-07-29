import React from 'react'
import './Header.scss'
import Navbar from '../Navbar/Navbar'
import { useTranslation } from 'react-i18next'
import Header2 from './Header2'
import Sliderr from '../Slider/Sliderr'
const Header = () => {
    const {t,i18n} = useTranslation();
  return (
    <>
    <header className="header">
        <div className="container">
        <Navbar/>
        <Header2 headerTitle={t("9")} headerText={t("10")}/>
       
       
        </div>
        <Sliderr/>
    </header>

      
    </>
  )
}

export default Header
