import React from 'react'
import './Zomin.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Header2 from '../../Components/Header/Header2'
import Sliderr from '../../Components/Slider/Sliderr'
import { useTranslation } from 'react-i18next'
const Zomin = () => {
    const {t,i18n} =useTranslation()
  return (
    <>
        <div className="zomin">
        <div className="container">
        <Navbar/>
        <Header2 headerTitle={t("19")} headerText={t("10")}/>
       
       
        </div>
        <Sliderr/>
    </div>
    </>
  )
}

export default Zomin
