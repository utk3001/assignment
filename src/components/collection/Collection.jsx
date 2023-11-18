import React from 'react'
import DeckStatus from '../deck/DeckStatus'
import DeckPriority from '../deck/DeckPriority';
import DeckUser from '../deck/DeckUser';
import './Collection.css'

const Collection = (props) => {
  const group = ["Status", "User", "Priority"];
  // const category = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];

  if (props.group === group[0]) {
    return (
      <div className='collection'>
        <DeckStatus group={props.group} ind={0} ticket={props.ticket} user={props.user} />
        <DeckStatus group={props.group} ind={1} ticket={props.ticket} user={props.user} />
        <DeckStatus group={props.group} ind={2} ticket={props.ticket} user={props.user} />
        <DeckStatus group={props.group} ind={3} ticket={props.ticket} user={props.user} />
        <DeckStatus group={props.group} ind={4} ticket={props.ticket} user={props.user} />
      </div>
    )
  } else if (props.group === group[1]) {
    return (
      <div className='collection'>
        {(props.user === null) ? " " :
          props.user.map(data => {
            return (
              <DeckUser group={props.group} ticket={props.ticket} data={data} />
            )
          })
        }
      </div>
    )
  } else if (props.group === group[2]) {
    return (
      <div className='collection'>
        <DeckPriority group={props.group} ind={0} ticket={props.ticket} user={props.user} />
        <DeckPriority group={props.group} ind={4} ticket={props.ticket} user={props.user} />
        <DeckPriority group={props.group} ind={3} ticket={props.ticket} user={props.user} />
        <DeckPriority group={props.group} ind={2} ticket={props.ticket} user={props.user} />
        <DeckPriority group={props.group} ind={1} ticket={props.ticket} user={props.user} />
      </div>
    )
  } else {
    return (
      <div>
        error
      </div>
    )
  }
}

export default Collection