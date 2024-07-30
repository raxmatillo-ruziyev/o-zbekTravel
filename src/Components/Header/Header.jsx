import React, { useEffect } from 'react'
import './Header.scss'
import Navbar from '../Navbar/Navbar'
import { useTranslation } from 'react-i18next'
import Header2 from './Header2'
import Sliderr from '../Slider/Sliderr'
const Header = () => {
    const {t,i18n} = useTranslation();
    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
        i18n.changeLanguage(savedLanguage);
      }, []);
  return (
    <>
    <header className="header">
        <div className="container">
        <Navbar/>
        <Header2 headerTitle={t("9")} headerText={t("10")}/>
       
        <Sliderr/>
        </div>
      
    </header>

      
    </>
  )
}

export default Header
