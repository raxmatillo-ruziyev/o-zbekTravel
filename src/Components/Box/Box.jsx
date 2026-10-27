import React from 'react';
import './Box.scss';

/**
 * Kichik ma'lumot kartasi.
 *   tone  - 'light' (oq karta, standart) | 'glass' (rasm ustida shaffof shisha, oq matn)
 *   icon  - ixtiyoriy: ikonka (SVG yoki boshqa element)
 */
const Box = ({ boxTitle, boxText, icon, tone = 'light' }) => (
    <div className={`statcard statcard--${tone}`}>
        {icon && (
            <span className="statcard__icon" aria-hidden="true">
                {icon}
            </span>
        )}
        <div className="statcard__body">
            <strong className="statcard__title">{boxTitle}</strong>
            <p className="statcard__text">{boxText}</p>
        </div>
    </div>
);

export default Box;