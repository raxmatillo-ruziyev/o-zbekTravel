import React, { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import './Navbar.scss'
import logo from '../../assets/logo.svg'
import surxon from '../../assets/surxon.jpg'
import turkiston from '../../assets/turkiston.jpeg'
import bosh from '../../assets/bosh.png'
import xiva from '../../assets/xiva.png'
import zomin from '../../assets/zomin.png'
import toshkent from '../../assets/toshkent.jpeg'
import samarqand from '../../assets/samarqand.jpeg'
import buxoro from '../../assets/buxoro.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const { t, i18n } = useTranslation();

    useEffect(() => {
      const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
      i18n.changeLanguage(savedLanguage);
    }, []);
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      localStorage.setItem('i18nextLng', lng);
      onClose();
    };
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="nav-box">
                        <a className='nav-link' href="#"><img className='nav-img' src={logo} alt="" /></a>
                        <button onClick={showDrawer} className='nav-btn'><i id='nav-icon' className='fa fa-align-left'></i></button>

                        <Drawer onClose={onClose} open={open}>
                            <div className="drawer-box">
                                <div className="drawer-buttons" >
                                    <button onClick={()=> changeLanguage("uz")}  className='drawer-btn'></button>
                                    <button  onClick={()=> changeLanguage("ru")}  className='drawer-btn'></button>
                                    <button  onClick={()=> changeLanguage("en")}  className='drawer-btn'></button>
                                </div>

                                <Link className='drawer-links' href="#"> 
                                <img className='drawer-img' src={bosh} alt="" />{t("1")}</Link>


                                <Link className='drawer-links' href="#">
                                <img className='drawer-img' src={buxoro} alt="" />
                                    {t("2")}</Link>


                                <Link className='drawer-links' href="#">
                                <img className='drawer-img' src={samarqand} alt="" />
                            {t("4")}</Link>

                                <Link className='drawer-links' href="#">
                                <img className='drawer-img' src={toshkent} alt="" />
                                	{t("3")}</Link>

                                <Link className='drawer-links' href="#">
                                <img className='drawer-img' src={zomin} alt="" />
                                	{t("5")}</Link>

                                <Link className='drawer-links' href="#">
                                <img className='drawer-img' src={xiva} alt="" />
                                {t("6")}</Link>

                                <Link className='drawer-links' href="#">
                                <img className='drawer-img' src={turkiston} alt="" />
                                	{t("7")}</Link>

                                <Link className='drawer-links' href="#">
                                <img className='drawer-img' src={surxon} alt="" />
                                {t("8")}</Link>

                            </div>

                        </Drawer>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
