import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import { useTranslation } from 'react-i18next';
import './Accardion.scss';
import { IoIosAddCircle, IoIosRemoveCircle } from 'react-icons/io';

const { Panel } = Collapse;

const Accardion = () => {
  const { t, i18n } = useTranslation();
  const [activeKeys, setActiveKeys] = useState(['1']);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const onChange = (key) => {
    setActiveKeys(key);
  };

  const text = t("48"); // Translation for the content


  const items = [
    {
      key: '1',
      label:<p className='accardion-text'>{ t("44")}</p>,
      children: <p className='accardion-text'>{text}</p>,
    },
    {
      key: '2',
      label:<p className='accardion-text'>{ t("45")}</p>,
      children: <p className='accardion-text'>{text}</p>,
    },
    {
      key: '3',
      label: <p className='accardion-text'>{ t("46")}</p>,
      children: <p className='accardion-text'>{text}</p>,
    },
    {
        key: '4',
        label:<p className='accardion-text'>{ t("47")}</p>,
        children: <p className='accardion-text'>{text}</p>,
      },
  ];

  return (
    <div className="accardion">
      <div className="container">
        <h1 className="accardion-title">{t('43')}</h1>
        <div className="accardion-content">
          <Collapse
          style={{
            margin:"20px 0"
          }}
            activeKey={activeKeys}
            onChange={onChange}
            expandIcon={({ isActive }) =>
              isActive ? (
                <IoIosRemoveCircle className="icon" style={{ fontSize: '30px' }} />
              ) : (
                <IoIosAddCircle className="icon" style={{ fontSize: '30px' }} />
              )
            }
          >
            {items.map((item) => (
              <Panel
            
                header={
                  <div className="panel-header">
                    {item.label}
                  </div>
                }
                key={item.key}
              >
                {item.children}
              </Panel> 
            ))
            } 
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Accardion;
