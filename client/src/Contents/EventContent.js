import React, {useState, useEffect} from 'react'
import "./EventContent.css"
import {Link} from 'react-router-dom'
import {  urlFor, client } from '../client'


const EventContent = () => {

  const  [events, setEvents] = useState([])

  useEffect(() => {

    const query = '*[_type == "events"]';
  
    client.fetch(query)
    .then((data)=>{
      setEvents(data);
    })
    
  }, [])
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <>
    <div className="news-card" >
    {events?.map((event)=>(
      <>
         <div class="card" key={event._id}>
         <img src={urlFor(event.fimage)} class="card-img-top" alt="..."/>
         <div class="card-body">
         <Link onClick={scrollToTop} to={`/eventDetail/${event._id}`}><h5 class="card-title">{event.name}</h5> </Link>
           <div class="card-text">
             <p>Govt. Associate College of Commerce College Kabirwala</p>
           </div>
           <hr />
           <Link onClick={scrollToTop} to={`/eventDetail/${event._id}`}>
           <p>More Details</p>
           </Link>
         </div>
       </div>
    </>
            )
            )}
</div>
    </>
  )
}

export default EventContent