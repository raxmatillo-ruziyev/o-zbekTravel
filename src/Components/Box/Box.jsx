import React from 'react'
import './Box.scss'
import { useTranslation } from 'react-i18next'
const Box = ({boxTitle,boxText}) => {
    const {t,i18n} = useTranslation();
    
  return (
    <>
    <div className="box">
        <h1 className="box-title">{boxTitle}</h1>
        <p className="box-text">{boxText}</p>
    </div>
      
    </>
  )
}

export default Box
