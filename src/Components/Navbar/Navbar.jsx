import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// Bu qator i18n sozlamasini ishga tushiradi. Eski navbarda shu import orqali yuklanardi;
// uni olib tashlaganimda tarjima tizimi umuman ishga tushmay qolgan edi.
import '../../i18n';
import logo from '../../assets/logo.svg';
import surxon from '../../assets/surxon1.jpg';
import turkiston from '../../assets/turkiston.jpg';
import bosh from '../../assets/bosh.png';
import xiva from '../../assets/xiva.png';
import zomin from '../../assets/zomin.png';
import toshkent from '../../assets/toshkent.jpg';
import samarqand from '../../assets/samarqand.jpeg';
import buxoro from '../../assets/buxoro.png';
import './Navbar.scss';

// Sakkizta takrorlangan <Link> o'rniga bitta ro'yxat. key - mavjud tarjima kalitlari ("1", "2", ...).
const NAV = [
    { to: '/', key: '1', img: bosh, end: true },
    { to: '/buxoro', key: '2', img: buxoro },
    { to: '/samarqand', key: '4', img: samarqand },
    { to: '/toshkent', key: '3', img: toshkent },
    { to: '/zomin', key: '5', img: zomin },
    { to: '/xiva', key: '6', img: xiva },
    { to: '/turkiston', key: '7', img: turkiston },
    { to: '/surxon', key: '8', img: surxon },

];

// Bayroqlar kod ichida SVG sifatida chizilgan: uz.jpeg, rus.png, eng.jpeg kabi 3 ta rasm fayli kerak emas
const Flag = ({ code }) => {
    if (code === 'uz') {
        return (
            <svg viewBox="0 0 36 36" aria-hidden="true" focusable="false">
                <rect width="36" height="36" fill="#1EB53A" />
                <rect width="36" height="22" fill="#fff" />
                <rect y="22" width="36" height="1.2" fill="#CE1126" />
                <rect width="36" height="13" fill="#0099B5" />
                <rect y="13" width="36" height="1.2" fill="#CE1126" />
                <circle cx="12" cy="6.5" r="3.4" fill="#fff" />
                <circle cx="13.4" cy="6.5" r="2.9" fill="#0099B5" />
                <g fill="#fff">
                    <circle cx="18.5" cy="4.2" r="0.8" />
                    <circle cx="22" cy="4.2" r="0.8" />
                    <circle cx="18.5" cy="7.4" r="0.8" />
                    <circle cx="22" cy="7.4" r="0.8" />
                </g>
            </svg>
        );
    }
    if (code === 'ru') {
        return (
            <svg viewBox="0 0 36 36" aria-hidden="true" focusable="false">
                <rect width="36" height="12" fill="#fff" />
                <rect y="12" width="36" height="12" fill="#0039A6" />
                <rect y="24" width="36" height="12" fill="#D52B1E" />
            </svg>
        );
    }
    return (
        <svg viewBox="0 0 36 36" aria-hidden="true" focusable="false">
            <rect width="36" height="36" fill="#012169" />
            <path d="M0 0L36 36M36 0L0 36" stroke="#fff" strokeWidth="7" />
            <path d="M0 0L36 36M36 0L0 36" stroke="#C8102E" strokeWidth="2.4" />
            <path d="M18 0V36M0 18H36" stroke="#fff" strokeWidth="10" />
            <path d="M18 0V36M0 18H36" stroke="#C8102E" strokeWidth="6" />
        </svg>
    );
};

const LANGS = [
    { code: 'uz', label: "O'zbekcha" },
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' },
];

const LanguageSwitch = ({ current, onChange }) => (
    <div className="langswitch" role="group" aria-label="Language">
        {LANGS.map(({ code, label }) => (
            <button
                key={code}
                type="button"
                className="langswitch__btn"
                aria-pressed={current === code}
                onClick={() => onChange(code)}
            >
                <span className="langswitch__flag">
                    <Flag code={code} />
                </span>
                {label}
            </button>
        ))}
    </div>
);

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const { pathname } = useLocation();

    const [open, setOpen] = useState(false);
    // Menyu ichi birinchi ochilgandan keyin chiziladi: rasmlar foydalanuvchi ochmaguncha yuklanmaydi
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const menuBtnRef = useRef(null);
    const closeBtnRef = useRef(null);
    const panelRef = useRef(null);
    const wasOpen = useRef(false);

    const lang = (i18n.resolvedLanguage || i18n.language || 'uz').slice(0, 2);

    const openMenu = useCallback(() => {
        setMounted(true);
        setOpen(true);
    }, []);
    const closeMenu = useCallback(() => setOpen(false), []);

    const changeLanguage = useCallback(
        (code) => {
            i18n.changeLanguage(code);
            localStorage.setItem('i18nextLng', code);
            setOpen(false);
        },
        [i18n]
    );

    // Saqlangan tilni tiklash (avvalgi xatti-harakat: saqlanmagan bo'lsa o'zbekcha)
    useEffect(() => {
        const saved = (localStorage.getItem('i18nextLng') || 'uz').slice(0, 2);
        if (saved !== lang) i18n.changeLanguage(saved);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // <html lang="..."> til almashganda yangilanadi (qulaylik va SEO uchun)
    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    // Scroll qilinganda panel soyasi
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Sahifa almashganda menyu yopiladi (brauzerning "orqaga" tugmasi uchun ham)
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Menyu ochiq: Escape, sahifa scrollini qulflash, fokusni menyu ichida ushlab turish
    useEffect(() => {
        if (!open) {
            if (wasOpen.current) menuBtnRef.current?.focus();
            wasOpen.current = false;
            return undefined;
        }

        wasOpen.current = true;
        document.body.style.overflow = 'hidden';
        closeBtnRef.current?.focus();

        const onKey = (e) => {
            if (e.key === 'Escape') {
                setOpen(false);
                return;
            }
            if (e.key !== 'Tab' || !panelRef.current) return;

            const items = panelRef.current.querySelectorAll('a[href], button:not([disabled])');
            if (!items.length) return;
            const first = items[0];
            const last = items[items.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', onKey);
        };
    }, [open]);

    return (
        <>
            <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
                <div className="navbar__inner">
                    <Link to="/" className="navbar__brand">
                        <img className="navbar__logo" src={logo} alt="" width={44} height={44} />
                        <span className="navbar__wordmark">
                            Uzbek <span>Travel</span>
                        </span>
                    </Link>

                    <button
                        ref={menuBtnRef}
                        type="button"
                        className="navbar__toggle"
                        aria-label="Menu"
                        aria-expanded={open}
                        aria-controls="site-menu"
                        onClick={openMenu}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            {/* Menyu va qoramtir fon <header> ning TASHQARIDA turadi: header'dagi
                backdrop-filter ichidagi "fixed" elementlarni buzib qo'yardi */}
            <div className={`drawer__backdrop${open ? ' is-open' : ''}`} onClick={closeMenu} aria-hidden="true" />

            <aside
                id="site-menu"
                ref={panelRef}
                className={`drawer${open ? ' is-open' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
                aria-hidden={!open}
            >
                <div className="drawer__head">
                    <Link to="/" className="navbar__brand" onClick={closeMenu}>
                        <img className="navbar__logo" src={logo} alt="" width={44} height={44} />
                        <span className="navbar__wordmark">
                            Uzbek <span>Travel</span>
                        </span>
                    </Link>

                    <button
                        ref={closeBtnRef}
                        type="button"
                        className="drawer__close"
                        aria-label="Close"
                        onClick={closeMenu}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                    </button>
                </div>

                {mounted && (
                    <>
                        <LanguageSwitch current={lang} onChange={changeLanguage} />

                        <nav className="drawer__nav" aria-label="Main">
                            {NAV.map(({ to, key, img, end }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    end={end}
                                    className={({ isActive }) => `drawer__tile${isActive ? ' is-active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    <img
                                        className="drawer__img"
                                        src={img}
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <span className="drawer__label">{t(key)}</span>
                                    <span className="drawer__arrow" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" focusable="false">
                                            <path d="M9 6l6 6-6 6" />
                                        </svg>
                                    </span>
                                </NavLink>
                            ))}
                        </nav>
                    </>
                )}
            </aside>
        </>
    );
};

export default Navbar;