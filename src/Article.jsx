import React from "react";
import "./Article.css";

export const Article = ({ item }) => {
  return (
    <div className="main">
      <div class="jumbotron">
        <div className="inside">
          <img
            src={item.banner_image}
            alt="..."
            width="250px"
            class="img-thumbnail"
          ></img>
          <div className="title">
            <h4>{item.title}</h4>
            <p class="lead">
              <a href={item.url}>Learn more</a>
            </p>

            <p> {item.time_published}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
