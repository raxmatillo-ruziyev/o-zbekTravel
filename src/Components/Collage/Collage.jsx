import React from 'react';
import './Collage.scss';


import { useTranslation } from 'react-i18next';


const Collage = ({image1,image2,image3,image4,image5,image6,image7,image8,image9}) => {
    const {t,i18n}= useTranslation();
    return (
        <div className="collage">
            <div className='container'>
                <h1 className="collage-title">{t("23")}</h1>
                <p className="collage-text">{t("24")}</p>
                <div className="collage-box">
                    <div className="collage-item"><img   className='collage-img' src={image1} alt="Image 1" />{}</div>
                    <div className="collage-item"><img   className='collage-img' src={image2} alt="Image 2" /></div>
                    <div className="collage-item"><h3 className='collage-subtitle'>{t("25")}</h3></div>
                    <div className="collage-item"><img   className='collage-img' src={image3} alt="Image 4" /></div>
                    <div className="collage-item"><img   className='collage-img' src={image7} alt="Image 5" /></div>
                    <div className="collage-item"><img   className='collage-img' src={image9} alt="Image 6" /></div>
                    <div className="collage-item"><img   className='collage-img' src={image4} alt="Image 7" /></div>
                    <div className="collage-item"><img   className='collage-img' src={image5} alt="Image 8" /></div>
                    <div className="collage-item"><img   className='collage-img' src={image6} alt="Image 9" /></div>
                    <div className="collage-item"><img   className='collage-img' src={image8} alt="Image 10" /></div>
                </div>
            </div>
        </div>
    );
};

export default Collage;
