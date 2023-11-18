import React, { useState, useEffect } from 'react'
import CardPriority from '../card/CardPriority';

const DeckPriority = (props) => {
    const priority = ["No Priority", "Low", "Medium", "High", "Urgent"];
    const priorityIcon = ["code-working-outline","battery-dead-outline","battery-half-outline","battery-full-outline","warning"];
    const [c, setC] = useState(0);
    useEffect(() => {
        setC(count());
    }, [props.ticket]);
    const count = () => {
        let x = 0;
        let m = props.ticket;
        if (m !== null) {
            m.forEach((data) => {
                if (data.priority === props.ind) {
                    x += 1;
                }
            });
        }
        return x;
    };
    return (
        <div className='deck'>
            <div className='deckTop'>
            <div className='deckTopItem'><ion-icon name={priorityIcon[props.ind]}></ion-icon></div>
            <div className='deckTopTitle'>{priority[props.ind]}</div>
            <div className='deckTopItem' id='counter'>{c}</div>
            <button className='deckTopItem'><ion-icon name="add-outline"></ion-icon></button>
            <button className='deckTopItem'><ion-icon name="ellipsis-horizontal-outline"></ion-icon></button>
            </div>
            {props.ticket === null ? "" :
                props.ticket.map(data => {
                    if (data.priority === props.ind) {
                        return (
                            <CardPriority
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

export default DeckPriority