import React, { useEffect } from 'react'
import './Footer.scss'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import { FaInfinity, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { RiMessengerFill } from 'react-icons/ri'
import icon from '../../assets/logo.webp'
const Footer = () => {
    const {t,i18n} =useTranslation();
    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
        i18n.changeLanguage(savedLanguage);
      }, []);
    
  return (
    <>
    <footer className="footer">
        <div className="container">
            <div className="footer-content">
                <ul className="footer-list">
                    <li className="footer-item">
                        <a href="#" className="footer-link1"><img src={icon} alt=""  className='footer-img'/></a> <br />
                        <a className='footer-sublink' href="#">{t("59")}</a> <br />
                      <div className='footer-icon-box'>
                      <FaLinkedinIn />
                        <RiMessengerFill />
                        <IoLogoTwitter />
                        <FaInfinity  />
                        <FaInstagram />
                        <FaYoutube />
                      </div>
                    </li>
                    <li className="footer-item">
                        <h1 className='footer-title'>{t("60")}</h1>
                        <a href="#" className="footer-link">{t("61")}</a>
                        <a href="#" className="footer-link">{t("62")}</a>
                        <a href="#" className="footer-link">{t("63")}</a>
                        <a href="#" className="footer-link">{t("64")}</a>
                        </li>
                        <li className="footer-item">
                        <h1 className='footer-title'>{t("65")}</h1>
                            <a href="#" className="footer-link">{t("2")}</a>
                            <a href="#" className="footer-link">{t("3")}</a>
                            <a href="#" className="footer-link">{t("4")}</a>
                            <a href="#" className="footer-link">{t("5")}</a>
                            <a href="#" className="footer-link">{t("6")}</a>
                            <a href="#" className="footer-link">{t("7")}</a>
                            <a href="#" className="footer-link">{t("8")}</a>

                    </li>
                </ul>
            </div>
        </div>
    </footer>
      
    </>
  )
}

export default Footer
