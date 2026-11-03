import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import './Card.scss';

// Ikonkalar kod ichida SVG sifatida: react-icons (AiOutline...) kutubxonasi va Font Awesome kerak emas
const PATHS = {
    calendar: (
        <>
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 10h18M8 3v4M16 3v4" />
        </>
    ),
    user: (
        <>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21a8 8 0 0 1 16 0" />
        </>
    ),
    pin: (
        <>
            <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
            <circle cx="12" cy="10" r="2.5" />
        </>
    ),
};

const Icon = ({ name }) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        {PATHS[name]}
    </svg>
);

const Star = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />
    </svg>
);

/**
 * Tur paketi kartasi. Prop nomlari o'zgarmagan:
 *   card1      - rasm            cardTitle - sarlavha        cardText - tavsif
 *   kun        - necha kun       odam      - necha kishi     cardText2 - yo'nalish
 *   card4      - ESKI narx (chizilgan)       cardText3 - HOZIRGI narx
 */
const Card = ({ card1, cardTitle, cardText, kun, odam, cardText2, cardText3, card4 }) => {
    // Avval `import { t } from 'i18next'` edi: u til almashganda kartani o'zi yangilamasdi
    const { t } = useTranslation();

    return (
        <article className="pkg">
            <div className="pkg__media">
                <img className="pkg__img" src={card1} alt="" loading="lazy" decoding="async" />
                <ul className="pkg__chips">
                    <li className="pkg__chip">
                        <Icon name="calendar" />
                        {kun}
                    </li>
                    <li className="pkg__chip">
                        <Icon name="user" />
                        {odam}
                    </li>
                </ul>
            </div>

            <div className="pkg__body">
                <div className="pkg__head">
                    {/* Eski kodda har bir kartada <h1> edi (uchta h1), endi <h3> */}
                    <h3 className="pkg__title">{cardTitle}</h3>
                    <span className="pkg__stars" role="img" aria-label="5 / 5">
                        {Array.from({ length: 5 }, (_, i) => (
                            <Star key={i} />
                        ))}
                    </span>
                </div>

                <p className="pkg__place">
                    <Icon name="pin" />
                    {cardText2}
                </p>

                <p className="pkg__text">{cardText}</p>

                <div className="pkg__foot">
                    <div className="pkg__price">
                        <s className="pkg__old">{card4}</s>
                        <strong className="pkg__new">{cardText3}</strong>
                    </div>
                    {/* Eski kodda <Button /> yana <a href="#"> ichida edi: <a> ichida <a> */}
                    <Button name={t('32')} variant="solid" />
                </div>
            </div>
        </article>
    );
};

export default Card;