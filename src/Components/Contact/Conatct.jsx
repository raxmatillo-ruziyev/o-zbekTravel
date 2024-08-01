import React, { useEffect } from 'react'
import './Contact.scss'
import { useTranslation } from 'react-i18next'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { MdOutlineMail } from 'react-icons/md'
import Button from '../Button/Button'
const Conatct = () => {
    const { t, i18n } = useTranslation()

    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
        i18n.changeLanguage(savedLanguage);
    }, []);
    return (
        <>
            <div className="contact">
                <div className="container">
                   <div className="contact-box">
                   <div className="contact-left">
                        <h2 className="contact-title">{t("49")}</h2>
                        <form className='contact-form'>
                            <input type="text" placeholder={t("50")} required />
                            <input type="number" placeholder='+998' required  min={1}/>
                            <textarea placeholder={t("51")} id=""></textarea>
                            <label >
                                <input type="checkbox" />
                               <p className='contact-subtext'> {t("52")}</p>
                            </label>
                        <a className='contact-link' href="#">    <Button name={t("53")} color={"orange"}/></a>
                        </form>
                    </div>
                    <div className="contact-right">
                        <div className="contact-info">
                            <p className="contact-text">{t("54")}</p>
                            <div style={{ position: 'relative', overflow: 'hidden' }}>
                                <a
                                    href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
                                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                                >
                                    Ташкент
                                </a>
                                <a
                                    href="https://yandex.uz/maps/10335/tashkent/?ll=69.279737%2C41.311151&utm_medium=mapframe&utm_source=maps&z=12"
                                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                                >
                                    Yandex xaritalari - transport, navigatsiya, joy qidirish
                                </a>
                                <iframe
                                    src="https://yandex.uz/map-widget/v1/?ll=69.279737%2C41.311151&z=12"
                                    width="100%"
                                    height="auto    "
                                    frameBorder="1"
                                    allowFullScreen
                                    style={{ position: 'relative' }}
                                ></iframe>
                            </div>
                            <ul className='contact-list'>
                                <li className='contact-item'>
                                <FaLocationDot />
                                <span className='contact-text'>{t("55")}</span>
                                </li>
                                <li className='contact-item'>
                                    <FaPhone />
                                    <span className='contact-text'>+9981234567</span>
                                    
                                </li>
                                <li className='contact-item'>
                                <MdOutlineMail />
                                    <span className='contact-text'>kompaniyanomi@gmail.com</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                   </div>
                </div>
            </div>

        </>
    )
}

export default Conatct
