import React, {useState, useEffect} from 'react'
import {  client } from '../../client'
import "./home.css";
import { motion } from "framer-motion";
import Content from "./Content";
import { DotLoader  } from "react-spinners";

const Home = () => {
  const  [instituteName, setInstituteName] = useState('')
  const [loading, setLoading] = useState(true)


  useEffect(() => {

    const query = '*[_type == "instituteName"]';
  
    client.fetch(query)
    .then((data)=>{
      if (data.length > 0) {
        setInstituteName(data[0].name); // Update state with the name
      }
      setLoading(false); 
    })
    
  }, [])
console.log(instituteName)
  return (
    <>
      <div className="contanier">
        <header>
          <section>
            <h1 className="home-heading" data-aos="zoom-in-up">
              <spanhome>WELCOME TO</spanhome><br />
              {instituteName || (
  <>
    {loading ? (
      <div className="loading-spinner">
        <DotLoader  color="#f1c93b" loading={loading} size={40} />
      </div>
    ) : null}
  </>
)}
            </h1>
            <motion.div
              className="bar"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
            ></motion.div>
            <div className="qoute">
              <h2>They know enough who know <br />
                    How to Learn
              </h2>
            </div>
            
          </section>
        </header>
      </div>
      <Content />
    </>
  );
};

export default Home;
