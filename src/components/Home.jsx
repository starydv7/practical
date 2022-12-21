import React from 'react'
import axios from "axios";
import styles from "./home.module.css";
import { useState } from 'react';
const Home = () => {
    const [data, setData] = useState([]);
    const getData = () => {
        axios.get("")
    }
  return (
      <div>
          
    </div>
  )
}

export default Home