import React, {useState, useEffect} from 'react'
import Head from '../../container/Head'
import { client } from '../../client'
import './ContactUs.css'
import {HiOutlineMail, HiOutlinePhoneMissedCall} from "react-icons/hi"
import {FaRegAddressCard} from "react-icons/fa"

const ContactUs = () => {
  const  [contactus, setContactus] = useState([])

  useEffect(() => {

    const query = '*[_type == "contactus"]';
  
    client.fetch(query)
    .then((data)=>{
      setContactus(data);

    })
    
  }, [])
  return (
    <>
    <Head name={'Contact Us'}/> 
<div className="news-div"  data-aos="fade-up" >
    <div className="contact-cont ">
    <h3 className='cont-title'>Contact Us</h3>


    {
    contactus?.map((curElem) => (
  <div key={curElem._id}>
       <div className="cont-detail">
    <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
  <div className="email">< FaRegAddressCard/></div> 
    <h5 class="card-title">Our Address</h5>
    <p class="card-text">{curElem.address}</p>
  </div>
</div>
    <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
  <div className="email">< HiOutlineMail/></div> 
    <h5 class="card-title">Email Us</h5>
    <p class="card-text">{curElem.email}</p>
  </div>
</div>
    <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
  <div className="email">< HiOutlinePhoneMissedCall/></div> 
    <h5 class="card-title">Call Us</h5>
    <p class="card-text">{curElem.number}</p>
  </div>
</div>
</div>
      </div>
))
}

   

<div class="contact-form-wrapper my ">
    <form action="https://formspree.io/f/meqbqzga"
      method="POST" class="contact-form">
      <p class="description">Feel free to contact us if you need any assistance, any help or another question.
      </p>
      <div>
        <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" name='Name' placeholder="Name" required/>
      </div>
      <div>
        <input type="email" class="form-control rounded border-white mb-3 form-input" name='Email' placeholder="Email" required/>
      </div>
      <div>
        <textarea id="message" name='Message' class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
      </div>
      <div class="submit-button-wrapper">
        <input type="submit" value="Send"/>
      </div>
    </form>
    <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.63571465418!2d71.9371885747179!3d30.304430606207383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b559d349e88b7%3A0x76c54c62b9505fc0!2sGovernment%20Commerce%20College%20Khanewal!5e0!3m2!1sen!2s!4v1690718095933!5m2!1sen!2s" 
    title="map"
    width="600" 
    height="450" 
    style={{ border:0 }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    </div>
    </div>
</div>
</div>
    
    </>
  )
}

export default ContactUs