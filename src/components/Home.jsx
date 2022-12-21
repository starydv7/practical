import React from 'react'
import axios from "axios";
import styles from "./home.module.css";
import { useState } from 'react';
import { useEffect } from 'react';
const Home = () => {
    const [data, setData] = useState([]);
    const url = "https://dummyapi.io/data/v1/user";
    const getData = () => {
    fetch(url, {
    method: "GET",
   withCredentials: true,
   headers: {
     "app-id": "6200f750b9d3f148c5712e63",
     "Content-Type": "application/json",
   },
 })
   .then((resp) => resp.json())
   .then(function (data) {
     console.log(data.data);
     setData(data.data);
   })
   .catch(function (error) {
     console.log(error);
   });
    }
    useEffect(() => {
        getData();
    }, []);
   
  //  const handleClick=()=>{
    
  //  }
  return (
    <div>
      <div className={styles.grid}>
        {data.length > 0 &&
          data.map((el) => (
            <div key={el.id} className={styles.grid2}>
              <img src={el.picture} alt="photos" />
              <p>{el.id}</p>
              <span>{el.title}</span>
              <span> </span>
              <span>{el.firstName}</span>
              <span> </span>
              <span>{el.lastName}</span>
              {/* <button className={styles.btn }>Click me</button> */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home