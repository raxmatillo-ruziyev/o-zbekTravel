import React, { useState } from 'react';
import './VideoFacade.scss';

/**
 * YouTube videoni faqat bosilganda yuklaydi.
 * Avval har sahifada <iframe> darhol yuklanardi: foydalanuvchi videoni ko'rmasa ham,
 * YouTube'ning og'ir skriptlari (taxminan 1 MB) sahifa bilan birga tushardi.
 * Endi boshida faqat kichik rasm (preview) va "play" tugmasi turadi.
 *
 * <Hero iframe={<VideoFacade videoId="Ccmjs_y0GU0" />} />
 */
const VideoFacade = ({ videoId, title = 'Video' }) => {
    const [playing, setPlaying] = useState(false);

    if (playing) {
        return (
            <iframe
                className="videofacade__frame"
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        );
    }

    return (
        <button
            type="button"
            className="videofacade"
            onClick={() => setPlaying(true)}
            aria-label={`Play: ${title}`}
        >
            <img
                className="videofacade__thumb"
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                decoding="async"
            />
            <span className="videofacade__play" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M8 5v14l11-7z" />
                </svg>
            </span>
        </button>
    );
};

export default VideoFacade;