import React from 'react'
import './Home.scss'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Collage from '../../Components/Collage/Collage'
import image1 from '../../assets/rasm11.jpeg';
import image2 from '../../assets/rasm12.jpeg';
import image3 from '../../assets/rasm13.jpeg';
import image4 from '../../assets/rasm14.jpeg';
import image5 from '../../assets/rasm15.jpeg';
import image6 from '../../assets/rasm16.jpeg';
import image7 from '../../assets/rasm17.jpeg';
import image8 from '../../assets/rasm18.jpeg';
import image9 from '../../assets/rasm10.jpeg';
import Section from '../../Components/Section/Section'
import Service from '../../Components/Service/Service'

const Home = () => {
  return (
    <>
      <Header />
      <Hero iframe={
   <iframe
   width="100%"
   height="100%"
   style={{borderRadius:"10px"}}
   src="https://www.youtube.com/embed/48PSJqwZVIc?si=m7yM65XklCITGD09&controls=0&showinfo=0&modestbranding=1&rel=0"
   title="YouTube video player"
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
   referrerPolicy="strict-origin-when-cross-origin"
   allowFullScreen
 ></iframe>}/>
 <Collage image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} image6={image6} image7={image7} image8={image8} image9={image9}/>
 <Section/>
 <Service/>
    </>
  )
}

export default Home