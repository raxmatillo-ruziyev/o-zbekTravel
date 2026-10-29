import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.scss';

const Hero = ({ iframe }) => {
    const { t } = useTranslation();

    return (
        <section className="videosec">
            <div className="videosec__inner">
                <h2 className="videosec__title">{t('22')}</h2>

                <div className="videosec__media">
                    <div className="videosec__player">{iframe}</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;