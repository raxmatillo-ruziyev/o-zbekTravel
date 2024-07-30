import React from 'react'
import './Toshkent.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Header2 from '../../Components/Header/Header2'
import Sliderr from '../../Components/Slider/Sliderr'
import { useTranslation } from 'react-i18next'
import Hero from '../../Components/Hero/Hero'
const Toshkent = () => {
    const {t,i18n} =useTranslation()
  return (
    <>
        <div className="toshkent">
        <div className="container">
        <Navbar/>
        <Header2 headerTitle={t("19")} headerText={t("10")}/>
       
        <Sliderr/>
     
        </div>
 
    </div>
    <Hero iframe={
            <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/QteNU9ZcF8k?si=JzYkdOrSZ-lOxnht&controls=0&modestbranding=1&rel=0" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
          
        }/>
    </>
  )
}

export default Toshkent
