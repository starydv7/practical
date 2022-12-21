import React from 'react'
import axios from "axios";
import styles from "./home.module.css";
import { useState } from 'react';
const Home = () => {
    const [data, setData] = useState([]);
    const url = "https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca";
    fetch(url, {
      method: "GET",
      withCredentials: true,
      headers: {
        "X-Auth-Token": "6200f750b9d3f148c5712e63",
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
   
  return (
      <div>
          
    </div>
  )
}

export default Home