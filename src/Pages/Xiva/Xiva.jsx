import React from 'react'
import './Xiva.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Header2 from '../../Components/Header/Header2'
import Sliderr from '../../Components/Slider/Sliderr'
import { useTranslation } from 'react-i18next'
import Hero from '../../Components/Hero/Hero'
const Xiva = () => {
    const {t,i18n} =useTranslation()
  return (
    <>
        <div className="xiva">
        <div className="container">
        <Navbar/>
        <Header2 headerTitle={t("21")} headerText={t("10")}/>
       
        <Sliderr/>
        <Hero iframe={
            <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/kFmjC4DITt4?si=ZCxj0DUAgnI5mMXd&controls=0&modestbranding=1&rel=0" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
          
        }/>
        </div>
      
    </div>
    </>
  )
}

export default Xiva
