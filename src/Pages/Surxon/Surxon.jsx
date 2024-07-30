import React from 'react'
import './Surxon.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Header2 from '../../Components/Header/Header2'
import Sliderr from '../../Components/Slider/Sliderr'
import { useTranslation } from 'react-i18next'
import Hero from '../../Components/Hero/Hero'
const Surxon = () => {
    const {t,i18n} =useTranslation()
  return (
    <>
        <div className="surxon">
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
            style={{borderRadius:"10px"}}
            src="https://www.youtube.com/embed/fqOzEUiSsk8?si=swvd8Y3ODboF8ODl&controls=0&showinfo=0&modestbranding=1&rel=0" 
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

export default Surxon
