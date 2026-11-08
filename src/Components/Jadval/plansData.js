// Narx jadvallari ma'lumoti endi backendda (backend_uz/plans.js), frontend uni /api/plans dan oladi.
// Bu yerda faqat tanlangan til bo'yicha matnni olish funksiyasi qoldi; til topilmasa o'zbekcha.
export const pick = (value, lang) => value[lang] || value.uz;