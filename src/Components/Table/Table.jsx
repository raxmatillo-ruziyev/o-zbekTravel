import React, { useEffect } from 'react'
import './Table.scss'
import Jadval from '../Jadval/Jadval'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
const Table = () => {
    const {t,i18n}=useTranslation()
    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
        i18n.changeLanguage(savedLanguage);
      }, []);

  return (
    <div>
    <div className="table">
        <div className="container">
            <h1 className='table-title'>{t("41")}</h1>
            <p className="table-text">{t("42")}</p>
            <Jadval/>
            <Jadval/>
            <Jadval/>
        </div>
    </div>
      
    </div>
  )
}

export default Table
