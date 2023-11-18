import React, { useState, useEffect } from 'react'
import CardStatus from '../card/CardStatus';
import './Deck.css'

const DeckStatus = (props) => {
    const category = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
    const statusIcon = ["alert-circle-outline","ellipse-outline","contrast","checkmark-circle","close-circle"]
    const [c, setC] = useState(0);
    useEffect(() => {
        setC(count());
    }, [props.ticket]);
    const count = () => {
        let x = 0;
        let m = props.ticket;
        if (m !== null) {
            m.forEach((data) => {
                if (data.status === category[props.ind]) {
                    x += 1;
                }
            });
        }
        return x;
    };
    return (
        <div className='deck'>
            <div className='deckTop'>
            <div className='deckTopItem'><ion-icon name={statusIcon[props.ind]}></ion-icon></div>
            <div className='deckTopTitle'>{category[props.ind]}</div>
            <div className='deckTopItem' id='counter'>{c}</div>
            <button className='deckTopItem'><ion-icon name="add-outline"></ion-icon></button>
            <button className='deckTopItem'><ion-icon name="ellipsis-horizontal-outline"></ion-icon></button>
            </div>
            {props.ticket === null ? "" :
                props.ticket.map(data => {
                    if (data.status === category[props.ind]) {
                        return (
                            <CardStatus
                                key={data._id}
                                data={data}
                                user={props.user}
                            />
                        );
                    }
                })
            }
        </div>
    )
}

export default DeckStatus