import React, { useId, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Accardion.scss';

// Savol va javob kalitlari. DIQQAT: eski kodda to'rtala savolga bir xil javob ("48") berilgan edi.
// Ehtimol, vaqtincha: har bir savolga o'z javob kalitini shu yerda yozing.
const FAQ = [
    { q: '44', a: '48' },
    { q: '45', a: '48' },
    { q: '46', a: '48' },
    { q: '47', a: '48' },
];

// antd Collapse (+ react-icons) o'rniga o'zimizning yengil akkordeon.
// Xatti-harakat avvalgidek: birinchi savol ochiq, bir nechtasini birdaniga ochish mumkin.
// Klaviatura bilan ishlaydi (Tab, Enter, Space), ekran o'qiydiganlar uchun aria belgilari bor.
// Til tiklash (useEffect + changeLanguage) bu yerdan olib tashlandi: u endi faqat Navbar'da.
const Accardion = () => {
    const { t } = useTranslation();
    const baseId = useId();
    const [open, setOpen] = useState(() => new Set([0]));

    const toggle = (index) => {
        setOpen((prev) => {
            const next = new Set(prev);
            if (next.has(index)) next.delete(index);
            else next.add(index);
            return next;
        });
    };

    return (
        <section className="faq">
            <div className="faq__inner">
                <h2 className="faq__title">{t('43')}</h2>

                <div className="faq__list">
                    {FAQ.map(({ q, a }, i) => {
                        const isOpen = open.has(i);
                        const buttonId = `${baseId}-q${i}`;
                        const panelId = `${baseId}-a${i}`;

                        return (
                            <div className={`faq__item${isOpen ? ' is-open' : ''}`} key={i}>
                                <h3 className="faq__q">
                                    <button
                                        type="button"
                                        id={buttonId}
                                        className="faq__btn"
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => toggle(i)}
                                    >
                                        <span>{t(q)}</span>
                                        <span className="faq__icon" aria-hidden="true">
                                            <svg viewBox="0 0 24 24" focusable="false">
                                                <path d="M5 12h14" />
                                                <path className="faq__plus" d="M12 5v14" />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    className="faq__panel"
                                >
                                    <div className="faq__panel-inner">
                                        <p className="faq__a">{t(a)}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Accardion;