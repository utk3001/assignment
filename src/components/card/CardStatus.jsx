import React, { useEffect } from 'react'
import './Card.css'

const CardStatus = (props) => {
  const priorityIcon = ["code-working-outline", "battery-dead-outline", "battery-half-outline", "battery-full-outline", "warning"];
  return (
    <div className='card'>
      <div className='cardId'>
        <div>{props.data.id}</div>
        <div className='title'>{props.data.title}</div>
        <div className='cardTag'>
          <ion-icon name={priorityIcon[props.data.priority]}></ion-icon>
          {(props.data.tag!=="") && <div>
            <ion-icon name="ellipse"></ion-icon>
            {props.data.tag}
          </div>}
        </div>
      </div>
      <img src="" alt="img" />
    </div>
  )
}

export default CardStatus