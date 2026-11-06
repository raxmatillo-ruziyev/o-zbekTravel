// Tarif jadvallari ma'lumoti: UCHTA ALOHIDA jadval, har birining o'z sarlavhasi va imkoniyatlari bor.
// Matnlar uch tilda shu fayl ichida turadi (tarjima fayliga yangi kalit qo'shish shart emas).
//
// DIQQAT: bu NAMUNAVIY ma'lumot. Eski jadval o'quv kursi haqida edi ("10-hours training",
// "Certificate"), sayohat saytiga mos emas. Haqiqiy paket tarkibini shu yerda o'zgartiring:
// jadvallar soni, qatorlar, qaysi tarifga nima kirishi.

const L = (uz, ru, en) => ({ uz, ru, en });

// Tariflar (ustunlar). O'rtadagisi "Mashhur" deb ajratib ko'rsatiladi.
export const PLANS = [
    L('Standart', 'Стандарт', 'Standard'),
    L('Komfort', 'Комфорт', 'Comfort'),
    L('Premium', 'Премиум', 'Premium'),
];

export const LABELS = {
    features: L('Imkoniyatlar', 'Возможности', 'Features'),
    popular: L('Mashhur', 'Популярный', 'Popular'),
    yes: L('Kiradi', 'Входит', 'Included'),
    no: L('Kirmaydi', 'Не входит', 'Not included'),
};

// values: har bir tarif uchun [Standart, Komfort, Premium]
//   true = kiradi, false = kirmaydi, null = chiziqcha (ma'lumot yo'q)
export const TABLES = [
    {
        id: 'history',
        title: L('Tarixiy shaharlar turi', 'Тур по историческим городам', 'Historic cities tour'),
        rows: [
            { label: L('Aeroport va vokzal transferi', 'Трансфер из аэропорта и вокзала', 'Airport and station transfer'), values: [true, true, true] },
            { label: L('Mehmonxonada turar joy', 'Проживание в отеле', 'Hotel accommodation'), values: [true, true, true] },
            { label: L('Kunlik nonushta', 'Ежедневный завтрак', 'Daily breakfast'), values: [false, true, true] },
            { label: L('Mahalliy gid xizmati', 'Услуги местного гида', 'Local guide'), values: [false, true, true] },
            { label: L('Yodgorliklar chiptalari', 'Билеты в памятники', 'Monument tickets'), values: [false, true, true] },
            { label: L("Sayohat sug'urtasi", 'Туристическая страховка', 'Travel insurance'), values: [false, false, true] },
            { label: L('Shaxsiy menejer', 'Персональный менеджер', 'Personal manager'), values: [false, false, true] },
        ],
    },
    {
        id: 'nature',
        title: L("Tog' va tabiat dam olishi", 'Отдых в горах и на природе', 'Mountain and nature escape'),
        rows: [
            { label: L('Transfer', 'Трансфер', 'Transfer'), values: [true, true, true] },
            { label: L('Turar joy (kottej yoki pansionat)', 'Проживание (коттедж или пансионат)', 'Cottage or resort stay'), values: [true, true, true] },
            { label: L('Kuniga uch mahal ovqat', 'Трёхразовое питание', 'Three meals a day'), values: [false, true, true] },
            { label: L('Faol dam olish dasturi', 'Программа активного отдыха', 'Active leisure program'), values: [false, true, true] },
            { label: L('Bolalar uchun dastur', 'Детская программа', "Kids' program"), values: [false, false, true] },
            { label: L('Shaxsiy gid', 'Персональный гид', 'Private guide'), values: [false, false, true] },
        ],
    },
    {
        id: 'abroad',
        title: L('Xorijiy sayohatlar', 'Зарубежные поездки', 'International trips'),
        rows: [
            { label: L('Aviachipta', 'Авиабилет', 'Flight ticket'), values: [true, true, true] },
            { label: L("Viza bo'yicha yordam", 'Помощь с визой', 'Visa assistance'), values: [false, true, true] },
            { label: L('Mehmonxona', 'Отель', 'Hotel'), values: [true, true, true] },
            { label: L('Aeroport transferi', 'Трансфер из аэропорта', 'Airport transfer'), values: [false, true, true] },
            { label: L('Ekskursiyalar', 'Экскурсии', 'Excursions'), values: [false, false, true] },
            { label: L("24/7 qo'llab-quvvatlash", 'Поддержка 24/7', '24/7 support'), values: [false, false, true] },
        ],
    },
];

// Tanlangan til bo'yicha matn; til topilmasa o'zbekcha
export const pick = (value, lang) => value[lang] || value.uz;