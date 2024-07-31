import React from 'react'
import './Card.scss'
import { t } from 'i18next'
import Button from '../Button/Button'
const Card = ({ card1,cardTitle,cardText }) => {
    return (
        <>
            <div className="card">
                <img src={card1} alt="" className='card-image'/>
                
                <h1 className="card-title">{cardTitle}</h1>
                <p className="card-text">{cardText}</p>
                <a href="#">    <Button name={t("32")} color={"#5EC2EC"} /></a>

            </div>

        </>
    )
}

export default Card
