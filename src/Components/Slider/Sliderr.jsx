import React from "react";
import Slider from "react-slick";
import './Slider.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../assets/bosh.png'
import slider2 from '../../assets/buxoro.png'
import slider3 from '../../assets/samarqand.jpeg'
import slider4 from '../../assets/surxon.jpg'
import slider5 from '../../assets/toshkent.jpg'
import slider6 from '../../assets/turkiston.jpg'
import slider7 from '../../assets/xiva.png'
import slider8 from '../../assets/zomin.png'
const Sliderr = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1220, // 1200px va pastga
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1120, // 992px va pastga
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1020, // 768px va pastga
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 920, // 576px va pastga
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 820, // 576px va pastga
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 720, // 576px va pastga
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 620, // 576px va pastga
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 520, // 576px va pastga
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 420, // 576px va pastga
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 320, // 576px va pastga
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 220, // 576px va pastga
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  
  return (
    <>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
      <img className="slider-img" src={slider1} alt="" />
        </div>
        <div>
        <img className="slider-img" src={slider2} alt="" />
        </div>
        <div>
          <img className="slider-img" src={slider3} alt="" />
        </div>
        <div>
          <img className="slider-img" src={slider4} alt="" />
        </div>
        <div>
          <img className="slider-img" src={slider5} alt="" />
        </div>
        <div>
          <img className="slider-img" src={slider6} alt="" />
        </div>
        <div>
          <img className="slider-img" src={slider7} alt="" />
        </div>
        <div>
          <img className="slider-img" src={slider8} alt="" />
        </div>
      </Slider>
    </div>
      
    </>
  )
}

export default Sliderr
