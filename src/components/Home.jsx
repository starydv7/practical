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
     console.log(data);
     setData(data);
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
          
    </div>
  )
}

export default Home