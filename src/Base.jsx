import React, { useState, useEffect } from "react";
import { Article } from "./Article";
import axios from "axios";
import "./Base.css";

export const Base = () => {
 
  const [wordSearch, setWordSearch] = useState("");
  const [data, setData] = useState([]);
  
  // useEffect(() => {
  //   async function getData() {
  //     const actualData = await fetch(
  //       "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=3UMZBONPRJC6CCXF"
  //     ).then((response) => response.json());

  //     console.log({...actualData.feed});
  //     setData([...actualData.feed]);
  //   }
  //   getData();
  // }, []);

  const handleSearch = () => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${wordSearch}&apikey=3UMZBONPRJC6CCXF`
      )
      .then((res) => {
        console.log(res.data.feed);
        setData([...res.data.feed]);
      });
  };
  

  return (
    <div>
      <div className="search">
        <input placeholder="type a word ..." onChange={(e)=>setWordSearch(e.target.value)} ></input>
        <button onClick={handleSearch}>search</button>
      </div>

      { 
      
        data.map((item) => (
        <Article item={item} />
      ))}
    </div>
  );
};
export default Base;
