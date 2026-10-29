import React from 'react';
import { useTranslation } from 'react-i18next';
import './Collage.scss';

// Katakchalar tartibi: raqam = shu raqamli rasm (image1...image9 prop'i), 'text' = matnli katakcha.
// Rasmlarning o'zaro tartibi eskisi bilan bir xil, faqat matnli katakcha mozaikaga mos joyga ko'chirilgan.
const TILES = [1, 2, 3, 7, 'text', 8, 4, 5, 6, 9];

// Til tiklash (useEffect + changeLanguage) bu yerdan olib tashlandi: u endi faqat Navbar'da.
// Rasmlar `alt=""`: ularga izoh yo'q, "Image 1", "Image 2" kabi ma'nosiz matnlar ekran o'qiydiganlarni chalg'itardi.
const Collage = (props) => {
    const { t } = useTranslation();

    return (
        <section className="collage">
            <div className="collage__inner">
                <h2 className="collage__title">{t('23')}</h2>
                <p className="collage__text">{t('24')}</p>

                <div className="collage__grid">
                    {TILES.map((tile) =>
                        tile === 'text' ? (
                            <div className="collage__tile collage__tile--text" key="text">
                                <h3 className="collage__subtitle">{t('25')}</h3>
                            </div>
                        ) : (
                            <div className="collage__tile" key={tile}>
                                <img
                                    className="collage__img"
                                    src={props[`image${tile}`]}
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Collage;