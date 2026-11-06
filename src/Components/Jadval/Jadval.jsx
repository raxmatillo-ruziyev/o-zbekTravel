import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import { PLANS, LABELS, pick } from '../PlansData/PlansData';
import './Jadval.scss';

// react-icons (FcOk, IoIosCloseCircle) o'rniga kod ichidagi SVG belgilar
const Mark = ({ value, yes, no }) => {
    if (value === true) {
        return (
            <span className="plans__mark plans__mark--yes" role="img" aria-label={yes}>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
            </span>
        );
    }

    if (value === false) {
        return (
            <span className="plans__mark plans__mark--no" role="img" aria-label={no}>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M7 7l10 10M17 7L7 17" />
                </svg>
            </span>
        );
    }

    return (
        <span className="plans__dash" aria-hidden="true">
            –
        </span>
    );
};

// Bitta jadval. Ma'lumot `table` prop'i orqali keladi (plansData.js dagi TABLES elementi).
// Til tiklash (useEffect + changeLanguage) bu yerdan olib tashlandi: u endi faqat Navbar'da.
// Eski kodda har bir <Button /> yana <a> bilan o'ralgan edi (uchta <a> ichida <a>).
const Jadval = ({ table }) => {
    const { t, i18n } = useTranslation();
    const lang = (i18n.resolvedLanguage || i18n.language || 'uz').slice(0, 2);
    const text = (value) => pick(value, lang);

    return (
        <div className="plans">
            <div className="plans__scroll">
                <table className="plans__table">
                    <caption className="plans__sr">{text(table.title)}</caption>
                    <thead>
                        <tr>
                            <th scope="col">{text(LABELS.features)}</th>
                            {PLANS.map((plan, i) => (
                                <th scope="col" key={i} className={i === 1 ? 'is-hot' : undefined}>
                                    {i === 1 && <span className="plans__badge">{text(LABELS.popular)}</span>}
                                    <span className="plans__plan">{text(plan)}</span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {table.rows.map(({ label, values }, r) => (
                            <tr key={r}>
                                <th scope="row">{text(label)}</th>
                                {values.map((value, i) => (
                                    <td key={i} className={i === 1 ? 'is-hot' : undefined}>
                                        <Mark value={value} yes={text(LABELS.yes)} no={text(LABELS.no)} />
                                    </td>
                                ))}
                            </tr>
                        ))}
                        <tr className="plans__cta-row">
                            <th scope="row">
                                <span className="plans__sr">{t('40')}</span>
                            </th>
                            {PLANS.map((plan, i) => (
                                <td key={i} className={i === 1 ? 'is-hot' : undefined}>
                                    <Button name={t('40')} variant={i === 1 ? 'primary' : 'solid'} />
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Jadval;