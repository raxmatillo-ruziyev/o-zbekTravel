import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Jadval from '../Jadval/Jadval';
import { TABLES, pick } from '../PlansData/PlansData';
import './Table.scss';

// Eski kodda aynan bir xil <Jadval /> uch marta ketma-ket chizilgan edi.
// Endi uchta HAR XIL jadval (plansData.js) tab tugmalari bilan almashtirib ko'riladi:
// sahifa uch barobar qisqa bo'ladi va foydalanuvchi o'ziga kerakligini tanlaydi.
// Til tiklash (useEffect + changeLanguage) va takroriy `import { t } from 'i18next'` olib tashlandi.
const Table = () => {
    const { t, i18n } = useTranslation();
    const lang = (i18n.resolvedLanguage || i18n.language || 'uz').slice(0, 2);
    const [active, setActive] = useState(0);
    const tabRefs = useRef([]);

    // Klaviatura: chap/o'ng o'q tugmalari, Home va End
    const handleKeyDown = (e) => {
        const last = TABLES.length - 1;
        let next = null;
        if (e.key === 'ArrowRight') next = active === last ? 0 : active + 1;
        if (e.key === 'ArrowLeft') next = active === 0 ? last : active - 1;
        if (e.key === 'Home') next = 0;
        if (e.key === 'End') next = last;
        if (next === null) return;

        e.preventDefault();
        setActive(next);
        tabRefs.current[next]?.focus();
    };

    return (
        <section className="pricing">
            <div className="pricing__inner">
                <h2 className="pricing__title">{t('41')}</h2>
                <p className="pricing__text">{t('42')}</p>

                <div className="pricing__tabs" role="tablist" aria-label={t('41')} onKeyDown={handleKeyDown}>
                    {TABLES.map((table, i) => (
                        <button
                            key={table.id}
                            ref={(el) => (tabRefs.current[i] = el)}
                            type="button"
                            role="tab"
                            id={`pricing-tab-${table.id}`}
                            aria-selected={active === i}
                            aria-controls={`pricing-panel-${table.id}`}
                            tabIndex={active === i ? 0 : -1}
                            className={`pricing__tab${active === i ? ' is-active' : ''}`}
                            onClick={() => setActive(i)}
                        >
                            {pick(table.title, lang)}
                        </button>
                    ))}
                </div>

                <div
                    role="tabpanel"
                    id={`pricing-panel-${TABLES[active].id}`}
                    aria-labelledby={`pricing-tab-${TABLES[active].id}`}
                >
                    <Jadval table={TABLES[active]} />
                </div>
            </div>
        </section>
    );
};

export default Table;