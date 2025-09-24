import React from "react";
import seriesData from "../api/tvSeries.json";
import NetflixCard from "./NetflixCard";

function Card() {
  return (
    <ul>
      {seriesData.map((curElem) => (
        <NetflixCard key={curElem.id} curElem={curElem} />
      ))}
    </ul>
  );
}

export default Card;
