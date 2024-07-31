import React, { useEffect } from 'react';
import './Jadval.scss';
import { FcOk } from 'react-icons/fc';
import { IoIosCloseCircle } from 'react-icons/io';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';

const Jadval = () => {
    const {t,i18n}= useTranslation();
    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
        i18n.changeLanguage(savedLanguage);
      }, []);

  const data = [
    { key: '1', feature: '10-hours training', daily: <FcOk />, monthly: <FcOk />, annualy: <FcOk /> },
    { key: '2', feature: 'Coffee and lunch', daily: '', monthly: '', annualy: <FcOk /> },
    { key: '3', feature: 'Course files to your email in PDF', daily: <FcOk />, monthly: <FcOk />, annualy: <FcOk /> },
    { key: '4', feature: 'Individual consulting', daily: <IoIosCloseCircle style={{ color: "red" }} />, monthly: <FcOk />, annualy: <FcOk /> },
    { key: '5', feature: 'Certificate', daily: <IoIosCloseCircle style={{ color: "red" }} />, monthly:  <IoIosCloseCircle style={{ color: "red" }} />, annualy: <FcOk /> },
    { key: '6', feature: '', daily: <a><Button  name={t("40")} color={"green"} /></a>, monthly: <a><Button  color={"green"}  name={t("40")}/></a>, annualy:<a> <Button name={t("40")} color={"green"}  /></a> } // Added a name for the feature
  ];

  return (
    <div className="jadval">
      <div className="container">
        <div className="jadval-box">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Features</th>
                <th>Daily</th>
                <th>Monthly</th>
                <th>Annually</th>
              </tr>
            </thead>
            <tbody>
              {data.map(row => (
                <tr key={row.key}>
                  <td>{row.feature}</td>
                  <td>{row.daily}</td>
                  <td>{row.monthly}</td>
                  <td>{row.annualy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Jadval;
