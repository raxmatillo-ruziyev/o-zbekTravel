import React from 'react'
import './Zomin.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Header2 from '../../Components/Header/Header2'
import Sliderr from '../../Components/Slider/Sliderr'
import { useTranslation } from 'react-i18next'
import Hero from '../../Components/Hero/Hero'
import image1 from '../../assets/rasm11.jpeg';
import image2 from '../../assets/rasm12.jpeg';
import image3 from '../../assets/rasm13.jpeg';
import image4 from '../../assets/rasm14.jpeg';
import image5 from '../../assets/rasm15.jpeg';
import image6 from '../../assets/rasm16.jpeg';
import image7 from '../../assets/rasm17.jpeg';
import image8 from '../../assets/rasm18.jpeg';
import image9 from '../../assets/rasm10.jpeg';
import Collage from '../../Components/Collage/Collage'
import Section from '../../Components/Section/Section'
import Service from '../../Components/Service/Service'
import Accardion from '../../Components/Accardion/Accardion'
import Conatct from '../../Components/Contact/Conatct'
const Zomin = () => {
    const {t,i18n} =useTranslation()
  return (
    <>
        <div className="zomin">
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
            src="https://www.youtube.com/embed/x2cbM-auFqE?si=xL6l5zhheZDONJaC&controls=0&modestbranding=1&rel=0" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
          
        }/>
         <Collage image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} image6={image6} image7={image7} image8={image8} image9={image9}/>
         <Section/>
         <Service/>
         <Accardion/>
         <Conatct/>
 

    </>
  )
}

export default Zomin
