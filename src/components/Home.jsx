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
   
   
  return (
    <div className={styles.grid}>
      {data.length>0 && data.map((el) => (
        <div key={el.id}>
          <img src={el.picture} alt="photos" />
          <p>{el.id}</p>
        </div>
      ))}
          
    </div>
  )
}

export default Home