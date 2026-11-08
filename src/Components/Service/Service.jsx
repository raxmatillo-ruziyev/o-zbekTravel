import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../Card/Card';
import card1 from '../../assets/card1.jpeg';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.jpeg';
import './Service.scss';

// Backend "image: 'card1'" deb nom yuboradi, bu yerda uni haqiqiy rasmga bog'laymiz
const IMAGES = { card1, card2, card3 };

const Service = () => {
    const { t, i18n } = useTranslation();
    const [packages, setPackages] = useState([]);

    // "en-US" kabi qiymatlardan faqat "en" olinadi
    const lang = (i18n.resolvedLanguage || i18n.language || 'uz').slice(0, 2);

    // Til o'zgarganda paketlar tanlangan tilda qayta yuklanadi
    useEffect(() => {
        const controller = new AbortController();
        fetch(`/api/packages?lang=${lang}`, { signal: controller.signal })
            .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
            .then(setPackages)
            .catch((e) => e.name !== 'AbortError' && console.error('Paketlarni yuklashda xato:', e));
        return () => controller.abort();
    }, [lang]);

    return (
        <section className="packages">
            <div className="packages__inner">
                <h2 className="packages__title">{t('35')}</h2>
                <p className="packages__text">{t('36')}</p>

                <ul className="packages__list">
                    {packages.map((pkg) => (
                        <li key={pkg.id}>
                            <Card
                                cardTitle={pkg.title}
                                card1={IMAGES[pkg.image]}
                                cardText={pkg.description}
                                kun={pkg.days}
                                odam={pkg.people}
                                cardText2={pkg.includes}
                                card4={pkg.oldPrice}
                                cardText3={pkg.price}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Service;