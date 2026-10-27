import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../Navbar/Navbar';
import Header2 from './Header2';
import Sliderr from '../Slider/Sliderr';
import boshImg from '../../assets/bosh.png';
import './Header.scss';

/**
 * Hamma sahifalar uchun BITTA umumiy hero.
 *
 *   <Header />                                                   bosh sahifa (rasm: bosh.png)
 *   <Header image={buxoroBg} headerTitle={t('..')} headerText={t('..')} />   boshqa sahifalar
 *
 * Fon rasmi oddiy <img> sifatida chiziladi (object-fit: cover), qoramtir qatlam va matn rangi
 * Header2 ning o'zida, shuning uchun hero hamma sahifada bir xil joylashadi.
 */
const Header = ({ image = boshImg, headerTitle, headerText }) => {
    const { t } = useTranslation();

    return (
        <section className="header">
            <img className="header__bg" src={image} alt="" decoding="async" />
            <Navbar />
            <Header2 headerTitle={headerTitle ?? t('9')} headerText={headerText ?? t('10')} />
            <Sliderr />
        </section>
    );
};

export default Header;