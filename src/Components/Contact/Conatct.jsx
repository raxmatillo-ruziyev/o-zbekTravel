import React, { useEffect, useState } from 'react';
import './Contact.scss';
import { useTranslation } from 'react-i18next';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import Button from '../Button/Button';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
    i18n.changeLanguage(savedLanguage);
  }, []);

  const sendMessage = async () => {
    try {
      const token = '7027326228:AAHE5ePNUpvgI5uSE6sL1Y4a61Xcw9GzC6Y'; // Oldingi token
      const chatId = '6771255129'; // Oldingi chat ID
      const text = `Name: ${name}\nPhone: ${phone}\nMessage: ${message}\nAccepted Terms: ${accepted}`;
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text,
      });
      toast.success(t("56"));
      setName(''); // Name maydonini tozalash
      setPhone(''); // Phone maydonini tozalash
      setMessage(''); // Message maydonini tozalash
      setAccepted(false); // Checkbox'ni tozalash
    } catch (error) {
      toast.error(t("57"));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accepted) {
      sendMessage();
    } else {
      toast.error(t("58"));
    }
  };

  return (
    <>
     <ToastContainer />
      <div className="contact" id='contact'>
        <div className="container">
          <div className="contact-box">
            <div className="contact-left">
              <h2 className="contact-title">{t("49")}</h2>
              <form className='contact-form' onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder={t("50")}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="number"
                  placeholder='+998'
                  required
                  min={1}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <textarea
                  placeholder={t("51")}
                  id=""
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <label>
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={() => setAccepted(!accepted)}
                  />
                  <p className='contact-subtext'>{t("52")}</p>
                </label>
                <Button name={t("53")} color={"orange"} />
              </form>
            </div>
            <div className="contact-right">
              <div className="contact-info">
                <p className="contact-text">{t("54")}</p>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <a
                    href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                  >
                    Ташкент
                  </a>
                  <a
                    href="https://yandex.uz/maps/10335/tashkent/?ll=69.279737%2C41.311151&utm_medium=mapframe&utm_source=maps&z=12"
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                  >
                    Yandex xaritalari - transport, navigatsiya, joy qidirish
                  </a>
                  <iframe
                    src="https://yandex.uz/map-widget/v1/?ll=69.279737%2C41.311151&z=12"
                    width="100%"
                    height="200px"
                    frameBorder="1"
                    allowFullScreen
                    style={{ position: 'relative', borderRadius: "8px" }}
                  ></iframe>
                </div>
                <ul className='contact-list'>
                  <li className='contact-item'>
                    <FaLocationDot />
                    <span className='contact-text'>{t("55")}</span>
                  </li>
                  <li className='contact-item'>
                    <FaPhone />
                    <span className='contact-text'>+9981234567</span>
                  </li>
                  <li className='contact-item'>
                    <MdOutlineMail />
                    <span className='contact-text'>kompaniyanomi@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
