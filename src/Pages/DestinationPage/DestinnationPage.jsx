import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import VideoFacade from '../../Components/VideoFacade/VideoFacade';
import Collage from '../../Components/Collage/Collage';
import Section from '../../Components/Section/Section';
import Service from '../../Components/Service/Service';
import Accardion from '../../Components/Accardion/Accardion';
import Conatct from '../../Components/Contact/Conatct';
import Footer from '../../Components/Footer/Footer';
import { DESTINATIONS, DEFAULT_COLLAGE } from './Destinations';

/**
 * Yetti shahar sahifasi uchun BITTA shablon (avval 7 ta deyarli bir xil fayl edi).
 * Sahifalar orasidagi hamma farq `destinations.js` da.
 */
const DestinationPage = ({ id }) => {
    const { t } = useTranslation();
    const { hero, titleKey, videoId, collage = DEFAULT_COLLAGE } = DESTINATIONS[id];

    // [rasm1, rasm2, ...] -> { image1: rasm1, image2: rasm2, ... }
    const collageProps = Object.fromEntries(collage.map((src, i) => [`image${i + 1}`, src]));

    return (
        <>
            <Header image={hero} headerTitle={t(titleKey)} headerText={t('10')} />
            <Hero iframe={<VideoFacade videoId={videoId} title="YouTube video player" />} />
            <Collage {...collageProps} />
            <Section />
            <Service />
            <Accardion />
            <Conatct />
            <Footer />
        </>
    );
};

export default DestinationPage;