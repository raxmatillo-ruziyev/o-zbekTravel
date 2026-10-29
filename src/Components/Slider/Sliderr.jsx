import React from 'react';
import slider1 from '../../assets/bosh.png';
import slider2 from '../../assets/buxoro.png';
import slider3 from '../../assets/samarqand.jpeg';
import slider4 from '../../assets/surxon.jpg';
import slider5 from '../../assets/toshkent.jpg';
import slider6 from '../../assets/turkiston.jpg';
import slider7 from '../../assets/xiva.png';
import slider8 from '../../assets/zomin.png';
import './Slider.scss';

const IMAGES = [slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8];
const COPIES = 4; // Slider.scss dagi animatsiya masofasi (-25%) shu songa bog'liq: 100 / COPIES

// Doimiy aylanib turuvchi rasmlar lentasi faqat CSS bilan ishlaydi.
// Avval bunga react-slick + 2 ta CSS fayli + 80 qator sozlama kerak bo'lgan edi.
// Ro'yxat 4 marta takrorlanadi: keng ekranda (4K gacha) ham lenta butun enni to'ldirib turadi
// va animatsiya uzilishsiz aylanadi. (Ikki marta bo'lganda, katta ekranda o'ng tomon bo'sh qolardi.)
const Sliderr = () => (
    <div className="marquee" aria-hidden="true">
        <ul className="marquee__track">
            {Array.from({ length: COPIES }, () => IMAGES).flat().map((src, i) => (
                <li className="marquee__item" key={i}>
                    <img
                        className="marquee__img"
                        src={src}
                        alt=""
                        width="190"
                        height="130"
                        loading="lazy"
                        decoding="async"
                    />
                </li>
            ))}
        </ul>
    </div>
);

export default Sliderr;