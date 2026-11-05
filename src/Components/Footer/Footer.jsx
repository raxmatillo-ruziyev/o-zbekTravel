import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.svg';
import './Footer.scss';

// Ikonkalar kod ichida SVG: react-icons (fa, io, ri) bu yerda kerak emas
const ICONS = {
    linkedin: (
        <>
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8" cy="8.5" r="1" fill="currentColor" stroke="none" />
            <path d="M8 11.5V17M12 17v-5.5M12 13.5a2.5 2.5 0 0 1 5 0V17" />
        </>
    ),
    messenger: (
        <>
            <path d="M12 3C7 3 3 6.6 3 11c0 2.4 1.2 4.5 3 6v4l3.4-1.9c.8.2 1.7.4 2.6.4 5 0 9-3.6 9-8.5S17 3 12 3z" />
            <path d="M7.5 13.5l3.5-3.5 2 2 3.5-3.5" />
        </>
    ),
    x: <path d="M5 5l14 14M19 5L5 19" />,
    infinity: <path d="M8 8a4 4 0 1 0 0 8c4 0 4-8 8-8a4 4 0 1 1 0 8c-4 0-4-8-8-8z" />,
    instagram: (
        <>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </>
    ),
    youtube: (
        <>
            <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
            <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" />
        </>
    ),
};

// DIQQAT: eski kodda ijtimoiy tarmoqlar faqat ikonka edi, hech qanday havolasiz.
// Hozircha href: '#'. Haqiqiy manzillarni yozing (manzil yozilgach, havola yangi oynada ochiladi).
const SOCIALS = [
    { label: 'LinkedIn', icon: 'linkedin', href: '#' },
    { label: 'Messenger', icon: 'messenger', href: '#' },
    { label: 'X', icon: 'x', href: '#' },
    { label: 'Infinity', icon: 'infinity', href: '#' },
    { label: 'Instagram', icon: 'instagram', href: '#' },
    { label: 'YouTube', icon: 'youtube', href: '#' },
];

// Birinchi ustun (tarjima kalitlari 61-64). Eski kodda hammasi href="#" edi, haqiqiy manzillarni yozing.
const COMPANY = [
    { key: '61', href: '#' },
    { key: '62', href: '#' },
    { key: '63', href: '#' },
    { key: '64', href: '#' },
];

// Yo'nalishlar: kalitlar va sahifalar Navbar'dagi bilan bir xil (eski kodda hammasi href="#" edi)
const DESTINATIONS = [
    { key: '2', to: '/buxoro' },
    { key: '3', to: '/toshkent' },
    { key: '4', to: '/samarqand' },
    { key: '5', to: '/zomin' },
    { key: '6', to: '/xiva' },
    { key: '7', to: '/turkiston' },
    { key: '8', to: '/surxon' },
];

// Til tiklash (useEffect + changeLanguage) bu yerdan olib tashlandi: u endi faqat Navbar'da.
// Takroriy `import { t } from 'i18next'` ham olib tashlandi (u useTranslation bilan to'qnashib turardi).
const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="sitefooter">
            <div className="sitefooter__inner">
                <div className="sitefooter__grid">
                    <div className="sitefooter__brand-col">
                        <Link to="/" className="sitefooter__brand">
                            <img src={logo} alt="" width={44} height={44} />
                            <span>
                                Uzbek <span>Travel</span>
                            </span>
                        </Link>

                        <p className="sitefooter__about">{t('59')}</p>

                        <div className="sitefooter__socials">
                            {SOCIALS.map(({ label, icon, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="sitefooter__social"
                                    aria-label={label}
                                    {...(/^https?:/.test(href)
                                        ? { target: '_blank', rel: 'noopener noreferrer' }
                                        : {})}
                                >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        {ICONS[icon]}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    <nav className="sitefooter__col" aria-label={t('60')}>
                        <h3 className="sitefooter__heading">{t('60')}</h3>
                        <ul className="sitefooter__list">
                            {COMPANY.map(({ key, href }) => (
                                <li key={key}>
                                    <a className="sitefooter__link" href={href}>
                                        {t(key)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav className="sitefooter__col" aria-label={t('65')}>
                        <h3 className="sitefooter__heading">{t('65')}</h3>
                        <ul className="sitefooter__list">
                            {DESTINATIONS.map(({ key, to }) => (
                                <li key={key}>
                                    <Link className="sitefooter__link" to={to}>
                                        {t(key)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;