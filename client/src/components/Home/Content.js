import React, { useState ,useEffect  } from 'react'
import PrincipleM from '../PrincipleM/PrincipleM'
import { client, urlFor } from '../../client'
import Pride from '../Pride/Pride'
import Slider from '../../Contents/Slider'
import ReadMoreReact from 'read-more-react';
import './content.css'
import Slider2 from "../../Contents/Slider2" 



const Content = () => {

  const  [message, setMessage] = useState([]);

  useEffect(() => {
    const query = '*[_type == "vision"]';
  
    client.fetch(query)
    .then((data)=>{
      setMessage(data);
    })
    
  }, [])


  return (
    <>
    <div ref={(ref) => (window.contentRef = ref)}>
      <PrincipleM/>
    </div>
    <div className="message-container">
        <div className="message-real-content">
        {
        message.map((curElem)=>{
            return(
            <>
        <div className="message-real " key={curElem.id}>
        <div className='urdu'>
          <img className="imgClass" src={urlFor(curElem.image)} alt="" />
          <h2>{curElem.head}</h2>
          <p><ReadMoreReact text={curElem.message}
            min={50}
            ideal={80}
            max={2000}
            readMoreText={"Read More..."}
            />
            </p>
          </div>
        </div>
      
 
    </>
    )
  })
}
  </div>
</div>
<div className="cont-time home-degree" data-aos="fade-up">
      <Slider2/>
</div>
      <div className="cont-time home-new" data-aos="fade-up">
      <h3>Latest Events</h3>
    <p>Here are institute's Latest Events</p>
      <Slider/>
</div>
      <div className="cont-time home-degree" data-aos="fade-up">
      <h3>Institute Wall of Pride</h3>
    <p>Our Allumni are now playing their role in different Departments Nationwide.</p>
      <Pride/>
</div>

    </>
  )
}

export default Content