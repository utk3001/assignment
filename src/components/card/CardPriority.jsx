import React, { useEffect } from 'react'

const CardStatus = (props) => {
  const priorityIcon = ["code-working-outline", "battery-dead-outline", "battery-half-outline", "battery-full-outline", "warning"];
  const statusIcon = new Map([
    ["Backlog","alert-circle-outline"],
    ["Todo","ellipse-outline"],
    ["In progress","contrast"],
    ["Done","checkmark-circle"],
    ["Cancelled","close-circle"]
  ]);
  return (
    <div className='card'>
      <div className='cardId'>
        <div>{props.data.id}</div>
        <div className='titleBox'>
        <div className='pIcon'><ion-icon name={statusIcon.get(props.data.status)}></ion-icon></div>
          <div className='title'>{props.data.title}</div>
        </div>
        <div className='cardTag'>
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