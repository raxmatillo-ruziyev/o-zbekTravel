import React from 'react'
import './Home.scss'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'

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
 
    </>
  )
}

export default Home