import React from 'react';
import { useTranslation } from 'react-i18next';
import Jadval from '../Jadval/Jadval';
import './Table.scss';

// Til tiklash (useEffect + changeLanguage) va takroriy `import { t } from 'i18next'` olib tashlandi.
// Eski kodda aynan bir xil <Jadval /> uch marta ketma-ket chizilgan edi, endi bitta.
// (Uchtasi kerak bo'lsa, `<Jadval />` qatorini takrorlang.)
const Table = () => {
    const { t } = useTranslation();

    return (
        <section className="pricing">
            <div className="pricing__inner">
                <h2 className="pricing__title">{t('41')}</h2>
                <p className="pricing__text">{t('42')}</p>

                <Jadval />
            </div>
        </section>
    );
};

export default Table;