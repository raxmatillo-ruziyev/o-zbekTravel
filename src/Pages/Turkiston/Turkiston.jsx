import React from 'react'
import './Turkiston.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Header2 from '../../Components/Header/Header2'
import Sliderr from '../../Components/Slider/Sliderr'
import { useTranslation } from 'react-i18next'
const Turkiston = () => {
    const {t,i18n} =useTranslation()
  return (
    <>
        <div className="turkiston">
        <div className="container">
        <Navbar/>
        <Header2 headerTitle={t("19")} headerText={t("10")}/>
       
        <Sliderr/>
        </div>
     
    </div>
    </>
  )
}

export default Turkiston
