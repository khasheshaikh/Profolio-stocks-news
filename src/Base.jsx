import React, { useState, useEffect } from "react";
import { Article } from "./Article";
import "./Base.css";

export const Base = () => {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const actualData = await fetch(
        "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=3UMZBONPRJC6CCXF"
      ).then((response) => response.json());

      console.log({...actualData.feed});
      setData([...actualData.feed]);
    }
    getData();
  }, []);
  

  return (
    <div>
      <div className="search">
        <input placeholder="type a word ..."></input>
        <button>search</button>
      </div>

      {data.map((item) =>(<Article item={item} />))}
    </div>
  );
};
export default Base;
