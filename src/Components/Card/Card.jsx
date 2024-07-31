import React from 'react'
import './Card.scss'
import { t } from 'i18next'
import Button from '../Button/Button'
import { AiOutlineCalendar, AiOutlineEnvironment, AiOutlineUser } from 'react-icons/ai'
const Card = ({ card1,cardTitle,cardText,kun,odam,cardText2 }) => {
    return (
        <>
            <div className="card">
                <img src={card1} alt="" className='card-image'/>
                <ul className="card-list">
                    <li className="card-list-item">
                    <AiOutlineCalendar /> <h3 className='card-subtitle'>{kun}</h3>
                    </li>
                    <li className="card-list-item">
                    <AiOutlineUser /> <h3 className='card-subtitle'> {odam}</h3>
                    </li>
                </ul>
                <h1 className="card-title">{cardTitle} 
                   <span>
                   <i id='card-icon' className='fa fa-star'></i>
                   <i id='card-icon' className='fa fa-star'></i>
                   <i id='card-icon' className='fa fa-star'></i>
                   <i id='card-icon' className='fa fa-star'></i>
                   <i id='card-icon' className='fa fa-star'></i>
                   </span>
                </h1>
                <p className="card-text2"><AiOutlineEnvironment /> {cardText2}</p>
                <p className="card-text">{cardText}</p>
                <a href="#">    <Button name={t("32")} color={"#5EC2EC"} /></a>

            </div>

        </>
    )
}

export default Card
