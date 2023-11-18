import React, { useState, useEffect } from 'react'
import CardUser from '../card/CardUser';

const DeckUser = (props) => {
    const [c, setC] = useState(0);
    useEffect(() => {
        setC(count());
    }, [props.ticket]);
    const count = () => {
        let x = 0;
        let m = props.ticket;
        if (m !== null) {
            m.forEach((data) => {
                if (data.userId === props.data.id) {
                    x += 1;
                }
            });
        }
        return x;
    };
    return (
        <div className='deck'>
            <div className='deckTop'>
            <div className='deckTopItem'><img src="" alt="img" /></div>
            <div className='deckTopTitle'>{props.data.name}</div>
            <div className='deckTopItem' id='counter'>{c}</div>
            <button className='deckTopItem'><ion-icon name="add-outline"></ion-icon></button>
            <button className='deckTopItem'><ion-icon name="ellipsis-horizontal-outline"></ion-icon></button>
            </div>
            {props.ticket === null ? "" :
                props.ticket.map(data => {
                    if (data.userId === props.data.id) {
                        return (
                            <CardUser
                                key={data._id}
                                data={data}
                                user={props.data}
                            />
                        );
                    }
                })
            }
        </div>
    )
}

export default DeckUser