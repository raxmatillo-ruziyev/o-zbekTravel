import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import './Jadval.scss';

// DIQQAT: bu jadvalning matnlari ingliz tilida va o'quv kursi haqida ("10-hours training",
// "Coffee and lunch", "Certificate"), sayohat saytiga mos emas. Ehtimol, boshqa loyihadan qolgan namuna.
// Haqiqiy tarif/paket ma'lumotlarini shu ikki ro'yxatga yozasiz (yoki menga yuboring, uch tilda tayyorlayman).
const COLUMNS = ['Daily', 'Monthly', 'Annually'];

// values: true = kiradi, false = kirmaydi, null = ma'lumot yo'q (chiziqcha)
const ROWS = [
    { feature: '10-hours training', values: [true, true, true] },
    { feature: 'Coffee and lunch', values: [null, null, true] },
    { feature: 'Course files to your email in PDF', values: [true, true, true] },
    { feature: 'Individual consulting', values: [false, true, true] },
    { feature: 'Certificate', values: [false, false, true] },
];

// react-icons (FcOk, IoIosCloseCircle) o'rniga kod ichidagi SVG belgilar
const Mark = ({ value }) => {
    const { t } = useTranslation();

    if (value === true) {
        return (
            <span className="plans__mark plans__mark--yes" role="img" aria-label={t('tableYes', 'Included')}>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
            </span>
        );
    }

    if (value === false) {
        return (
            <span className="plans__mark plans__mark--no" role="img" aria-label={t('tableNo', 'Not included')}>
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

// Til tiklash (useEffect + changeLanguage) bu yerdan olib tashlandi: u endi faqat Navbar'da.
// Eski kodda har bir <Button /> yana <a> bilan o'ralgan edi (uchta <a> ichida <a>).
const Jadval = () => {
    const { t } = useTranslation();

    return (
        <div className="plans">
            <div className="plans__scroll">
                <table className="plans__table">
                    <thead>
                        <tr>
                            <th scope="col">Features</th>
                            {COLUMNS.map((name) => (
                                <th scope="col" key={name}>
                                    {name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {ROWS.map(({ feature, values }) => (
                            <tr key={feature}>
                                <th scope="row">{feature}</th>
                                {values.map((value, i) => (
                                    <td key={COLUMNS[i]}>
                                        <Mark value={value} />
                                    </td>
                                ))}
                            </tr>
                        ))}
                        <tr className="plans__cta-row">
                            <th scope="row">
                                <span className="plans__sr">{t('40')}</span>
                            </th>
                            {COLUMNS.map((name) => (
                                <td key={name}>
                                    <Button name={t('40')} variant="solid" />
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