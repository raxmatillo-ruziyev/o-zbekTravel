import React from 'react'
import './Accardion.scss'
import { useTranslation } from 'react-i18next'
const Accardion = () => {
    const {t,i18n}= useTranslation();
    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
        i18n.changeLanguage(savedLanguage);
      }, []);

  return (
    <>
    <div className="accardion">
        <div className="container">
            <h1 className='accardion-title'>{t("")}</h1>
        </div>
    </div>
      
    </>
  )
}

export default Accardion
