import React from "react";
import seriesData from "../api/tvSeries.json";
import NetflixCard from "./NetflixCard";

function Card() {
  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((curElem) => (
        <NetflixCard key={curElem.id} data={curElem} />
      ))}
    </ul>
  );
}

export default Card;
