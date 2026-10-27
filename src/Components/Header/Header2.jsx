import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '../Box/Box';
import Button from '../Button/Button';
import './Header.scss';

// Ikonkalar kod ichida SVG sifatida: Font Awesome yoki boshqa kutubxona kerak emas
const ICONS = {
    star: <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />,
    tag: (
        <>
            <path d="M3 12V4.5A1.5 1.5 0 0 1 4.5 3H12l9 9-9 9z" />
            <circle cx="8" cy="8" r="1.4" fill="currentColor" stroke="none" />
        </>
    ),
    grid: (
        <>
            <rect x="4" y="4" width="7" height="7" rx="1.5" />
            <rect x="13" y="4" width="7" height="7" rx="1.5" />
            <rect x="4" y="13" width="7" height="7" rx="1.5" />
            <rect x="13" y="13" width="7" height="7" rx="1.5" />
        </>
    ),
};

const Icon = ({ name }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
    >
        {ICONS[name]}
    </svg>
);

// [sarlavha kaliti, matn kaliti, ikonka]
const CARDS = [
    ['11', '12', 'star'],
    ['13', '14', 'tag'],
    ['15', '16', 'grid'],
];

const Header2 = ({ headerTitle, headerText }) => {
    const { t } = useTranslation();

    return (
        <div className="header2">
            <div className="header2__inner">
                <div className="header2__copy">
                    <h1 className="header2__title">{headerTitle}</h1>
                    <p className="header2__text">{headerText}</p>

                    <div className="header2__actions">
                        <Button name={t('17')} variant="primary" />
                        <Button name={t('18')} variant="glass" />
                    </div>
                </div>

                <ul className="header2__cards">
                    {CARDS.map(([title, text, icon], i) => (
                        <li key={title} style={{ '--i': i }}>
                            <Box
                                tone="glass"
                                icon={<Icon name={icon} />}
                                boxTitle={t(title)}
                                boxText={t(text)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header2;