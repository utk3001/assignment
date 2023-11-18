import React, { useEffect, useState } from 'react'
import Collection from '../collection/Collection';
import Drop from '../dropdown/Drop';
import './Home.css'

const Home = () => {
  const [all, setAll] = useState(null);
  const [error, setError] = useState("");
  const [group, setGroup] = useState("Status");
  const [order, setOrder] = useState("Priority");
  const [ticket, setTicket] = useState(null);
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  const handleGroup = (e) => {
    setGroup(e.target.value);
  }
  const handleOrder = (e) => {
    setOrder(e.target.value);
    if (all) {
      const x = all.tickets;
      if (e.target.value === "Priority") x.sort((a, b) => (a.priority < b.priority) ? 1 : -1)
      else if (e.target.value === "Title") x.sort((a, b) => (a.title > b.title) ? 1 : -1)
      setTicket(x);
    }
  }

  const handleDisplay = () => {
    setOpen(!open);
    console.log(open)
    
  }

  const handleClick = (e)=> {
    if(!e.target.closest("#drop") && open) {
      setOpen(false);
    }
  }

  useEffect(()=>{
    document.addEventListener("click",handleClick);
    return ()=> {
      document.removeEventListener("click",handleClick);
    }
  })

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    if (all) {
      const x = all.tickets;
      const y = all.users;
      x.sort((a, b) => (a.priority < b.priority) ? 1 : -1)
      setTicket(x);
      setUser(y);
    }
  }, [all]);

  const getAll = async () => {
    try {
      const res = await fetch(`https://api.quicksell.co/v1/internal/frontend-assignment`);
      const body = await res.json();
      setAll(body)
    } catch (error) {
      setError(error)
      setTimeout(() => {
        setError("")
      }, 2000)
    }
  }

  return (
    <div className='h100'>
      <div id='drop'>
        <button onClick={handleDisplay}>Display</button>
        {
          open && <Drop group={group} order={order} handleGroup={handleGroup} handleOrder={handleOrder}/>
        }
      </div>
      <div className='back'>
        <Collection group={group} order={order} ticket={ticket} user={user} />
      </div>
    </div>
  )
}

export default Home