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
            height="200px"
            width="200px"
            class="img-thumbnail"
          ></img>
          <div className="title">
            <h4>{item.title}</h4>
            <p class="lead">
              <a href={item.url}>Learn more</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
