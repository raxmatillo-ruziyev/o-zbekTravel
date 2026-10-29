// Yetti sahifaning farqlari shu bitta faylda: fon rasmi, sarlavha kaliti, YouTube video.
// Yangi shahar qo'shish: shu yerga bitta qator + bitta kichik sahifa fayli.

import buxoro from '../../assets/buxoro.png';
import samarqand from '../../assets/samarqand.jpeg';
import surxon from '../../assets/surxon.jpg';
import toshkent from '../../assets/toshkent.jpg';
import turkiston from '../../assets/turkiston.jpg';
import xiva from '../../assets/xiva.png';
import zomin from '../../assets/zomin.png';

import rasm10 from '../../assets/rasm10.jpeg';
import rasm11 from '../../assets/rasm11.jpeg';
import rasm12 from '../../assets/rasm12.jpeg';
import rasm13 from '../../assets/rasm13.jpeg';
import rasm14 from '../../assets/rasm14.jpeg';
import rasm15 from '../../assets/rasm15.jpeg';
import rasm16 from '../../assets/rasm16.jpeg';
import rasm17 from '../../assets/rasm17.jpeg';
import rasm18 from '../../assets/rasm18.jpeg';

// Kollaj rasmlari tartibi (6 ta sahifada bir xil edi)
export const DEFAULT_COLLAGE = [rasm11, rasm12, rasm13, rasm14, rasm15, rasm16, rasm17, rasm18, rasm10];

export const DESTINATIONS = {
    // DIQQAT: buxoro, samarqand, surxon, toshkent va zomin sahifalarida sarlavha kaliti bir xil ("19").
    // Ya'ni beshta sahifada ham bir xil sarlavha chiqadi. Har biriga o'z kalitini bering.
    buxoro: { hero: buxoro, titleKey: '19', videoId: 'Ccmjs_y0GU0' },
    samarqand: { hero: samarqand, titleKey: '19', videoId: 'LkdULdm0V5c' },
    surxon: {
        hero: surxon,
        titleKey: '19',
        videoId: '4kC3_Pj4obA',
        // Surxon sahifasida kollaj tartibi boshqacha edi, shu saqlangan
        collage: [rasm10, rasm12, rasm13, rasm14, rasm15, rasm16, rasm17, rasm18, rasm11],
    },
    toshkent: { hero: toshkent, titleKey: '19', videoId: 'QteNU9ZcF8k' },
    turkiston: { hero: turkiston, titleKey: '20', videoId: 'rM4AjhKoZUg' },
    xiva: { hero: xiva, titleKey: '21', videoId: 'kFmjC4DITt4' },
    zomin: { hero: zomin, titleKey: '19', videoId: 'x2cbM-auFqE' },
};

