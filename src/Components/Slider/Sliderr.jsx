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
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false, // O'q tugmalarini olib tashlash
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 220,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
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
  );
}

export default Sliderr;
