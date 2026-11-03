import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '../Box/Box';
import Button from '../Button/Button';
import './Section.scss';

// Sakkizta takrorlangan <li><Box/></li> o'rniga bitta ro'yxat: [sarlavha kaliti, matn kaliti].
// DIQQAT: eski kodda shu to'rt karta aynan ikki marta ketma-ket takrorlangan edi,
// to'rtinchisi ("28") esa uchinchisi ("15") bilan bir xil matn kaliti ("16") ishlatgan.
// Hozircha hammasi saqlandi, kerakli matnlarni shu yerda almashtirasiz.
const PERKS = [
    ['11', '12'],
    ['13', '14'],
    ['15', '16'],
    ['28', '16'],
    ['11', '12'],
    ['13', '14'],
    ['15', '16'],
    ['28', '16'],
];

// Til tiklash (useEffect + changeLanguage) bu yerdan olib tashlandi: u endi faqat Navbar'da.
// Eski kodda <Button /> ni yana <a> bilan o'rab qo'yilgan edi: <a> ichida <a> (konsoldagi xato shundan).
const Section = () => {
    const { t } = useTranslation();

    return (
        <section className="whyus">
            <div className="whyus__inner">
                <div className="whyus__panel">
                    <h2 className="whyus__title">{t('26')}</h2>
                    <p className="whyus__text">{t('27')}</p>

                    <ul className="whyus__list">
                        {PERKS.map(([title, text], i) => (
                            <li key={i}>
                                <Box
                                    tone="glass"
                                    icon={String(i + 1).padStart(2, '0')}
                                    boxTitle={t(title)}
                                    boxText={t(text)}
                                />
                            </li>
                        ))}
                    </ul>

                    <div className="whyus__cta">
                        <Button name={t('29')} variant="primary" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;