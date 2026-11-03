import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../Card/Card';
import card1 from '../../assets/card1.jpeg';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.jpeg';
import './Service.scss';

// Uchta takrorlangan <li><Card/></li> o'rniga bitta ro'yxat. Prop nomlari Card.jsx dagi bilan bir xil.
// DIQQAT: eski kodda uchala paketda ham tavsif ("31"), kun ("37"), odam ("38"), narx matni ("39")
// va narxlar ("1,200 $" / "1,000 $") bir xil edi. Ehtimol, bu vaqtincha qiymatlar:
// har bir paket uchun o'zinikini shu yerda yozing.
const PACKAGES = [
    { cardTitle: '30', card1: card1 },
    { cardTitle: '33', card1: card2 },
    { cardTitle: '34', card1: card3 },
].map((pkg) => ({
    cardText: '31',
    kun: '37',
    odam: '38',
    cardText2: '39',
    card4: '1,200 $',
    cardText3: '1,000 $',
    ...pkg, // paketning o'z qiymatlari yuqoridagi umumiylarni almashtiradi
}));

// Til tiklash (useEffect + changeLanguage) bu yerdan olib tashlandi: u endi faqat Navbar'da.
const Service = () => {
    const { t } = useTranslation();

    return (
        <section className="packages">
            <div className="packages__inner">
                <h2 className="packages__title">{t('35')}</h2>
                <p className="packages__text">{t('36')}</p>

                <ul className="packages__list">
                    {PACKAGES.map((pkg) => (
                        <li key={pkg.cardTitle}>
                            <Card
                                cardTitle={t(pkg.cardTitle)}
                                card1={pkg.card1}
                                cardText={t(pkg.cardText)}
                                kun={t(pkg.kun)}
                                odam={t(pkg.odam)}
                                cardText2={t(pkg.cardText2)}
                                card4={pkg.card4}
                                cardText3={pkg.cardText3}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Service;