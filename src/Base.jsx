import React, { useState, useEffect } from "react";
import { Article } from "./Article";

import "./Base.css";

export const Base = () => {
  const [wordSearch, setWordSearch] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const actualData = await fetch(
        "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=3UMZBONPRJC6CCXF"
      ).then((response) => response.json());

      console.log(actualData);
      setData([...actualData.feed]);
    }
    getData();
  }, []);
  

  return (
    <div>
      <input
        placeholder="type a word ..."
        onChange={(e) => setWordSearch(e.target.value)}
      ></input>
      <button>search</button>
      <h1>heloo</h1>

      {data.map((item) => (
        <Article item={item} />
      ))}
    </div>
  );
};
export default Base;
