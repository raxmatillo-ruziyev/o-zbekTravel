import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import './Contact.scss';

// Forma ma'lumoti SERVERGA yuboriladi. Telegram tokeni va chat ID brauzerda emas, serverda turadi
// (api/contact.js). Manzilni .env faylida VITE_CONTACT_ENDPOINT bilan o'zgartirish mumkin.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact';

// DIQQAT: telefon va email hozircha namunaviy qiymatlar edi (eski kodda ham shunday). Haqiqiylarini yozing.
const PHONE = '+9981234567';
const EMAIL = 'kompaniyanomi@gmail.com';

const INITIAL = { name: '', phone: '', message: '', accepted: false, website: '' };

// Ikonkalar kod ichida SVG: react-icons (fa6, md) kerak emas
const ICONS = {
    pin: (
        <>
            <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
            <circle cx="12" cy="10" r="2.5" />
        </>
    ),
    phone: (
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    ),
    mail: (
        <>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
        </>
    ),
};

const Icon = ({ name }) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        {ICONS[name]}
    </svg>
);

// Til tiklash (useEffect + changeLanguage) bu yerdan olib tashlandi: u endi faqat Navbar'da.
// axios + react-toastify (+ uning CSS fayli) o'rniga oddiy fetch va forma tagidagi xabar.
const Contact = () => {
    const { t } = useTranslation();
    const [form, setForm] = useState(INITIAL);
    const [status, setStatus] = useState(null); // { type: 'ok' | 'error', text }
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.accepted) {
            setStatus({ type: 'error', text: t('58') });
            return;
        }

        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch(ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);

            setStatus({ type: 'ok', text: t('56') });
            setForm(INITIAL); // forma faqat muvaffaqiyatli yuborilganda tozalanadi
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus({ type: 'error', text: t('57') });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contactus" id="contact">
            <div className="contactus__inner">
                <div className="contactus__card">
                    {/* ---------- Forma ---------- */}
                    <div className="contactus__form-col">
                        <h2 className="contactus__title">{t('49')}</h2>

                        <form className="contactus__form" onSubmit={handleSubmit}>
                            <input
                                className="contactus__control"
                                name="name"
                                type="text"
                                autoComplete="name"
                                placeholder={t('50')}
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                            {/* type="number" telefon uchun noto'g'ri: "+" va boshidagi nolni olib tashlaydi */}
                            <input
                                className="contactus__control"
                                name="phone"
                                type="tel"
                                inputMode="tel"
                                autoComplete="tel"
                                placeholder="+998"
                                value={form.phone}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                className="contactus__control contactus__control--area"
                                name="message"
                                rows={4}
                                placeholder={t('51')}
                                value={form.message}
                                onChange={handleChange}
                            />

                            <label className="contactus__check">
                                <input
                                    type="checkbox"
                                    name="accepted"
                                    checked={form.accepted}
                                    onChange={handleChange}
                                />
                                <span>{t('52')}</span>
                            </label>

                            {/* Spam tuzog'i: odam ko'rmaydi va to'ldirmaydi, bot to'ldiradi */}
                            <input
                                className="contactus__trap"
                                name="website"
                                tabIndex={-1}
                                autoComplete="off"
                                aria-hidden="true"
                                value={form.website}
                                onChange={handleChange}
                            />

                            {status && (
                                <p
                                    className={`contactus__status contactus__status--${status.type}`}
                                    role={status.type === 'error' ? 'alert' : 'status'}
                                >
                                    {status.text}
                                </p>
                            )}

                            {/* Avval <Button /> oddiy havola edi, forma yuborilishi tugma ichidagi <button> ga tayangan */}
                            <Button
                                href={null}
                                type="submit"
                                variant="primary"
                                className="contactus__submit"
                                disabled={loading}
                                aria-busy={loading}
                            >
                                {t('53')}
                            </Button>
                        </form>
                    </div>

                    {/* ---------- Ma'lumot va xarita ---------- */}
                    <div className="contactus__info-col">
                        <p className="contactus__lead">{t('54')}</p>

                        <div className="contactus__map">
                            <iframe
                                title="Yandex map"
                                src="https://yandex.uz/map-widget/v1/?ll=69.279737%2C41.311151&z=12"
                                loading="lazy"
                                allowFullScreen
                            />
                        </div>
                        {/* Yandex shartlariga ko'ra xaritaga havolalar qoldirilishi kerak */}
                        <p className="contactus__credit">
                            <a
                                href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ташкент
                            </a>
                            {' · '}
                            <a
                                href="https://yandex.uz/maps/10335/tashkent/?ll=69.279737%2C41.311151&utm_medium=mapframe&utm_source=maps&z=12"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Yandex xaritalari
                            </a>
                        </p>

                        <ul className="contactus__list">
                            <li className="contactus__item">
                                <span className="contactus__icon">
                                    <Icon name="pin" />
                                </span>
                                <span>{t('55')}</span>
                            </li>
                            <li className="contactus__item">
                                <span className="contactus__icon">
                                    <Icon name="phone" />
                                </span>
                                <a href={`tel:${PHONE}`}>{PHONE}</a>
                            </li>
                            <li className="contactus__item">
                                <span className="contactus__icon">
                                    <Icon name="mail" />
                                </span>
                                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;