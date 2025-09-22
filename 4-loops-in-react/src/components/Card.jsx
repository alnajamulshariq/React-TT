import React from "react";
import seriesData from "../api/tvSeries.json";

function Card() {
  return (
    <>
      <ul>
        {seriesData.map((curElem) => {
          return (
            <li key={curElem.id}>
              <div className="card">
                <img
                  src={curElem.img_url}
                  alt={curElem.name}
                  height="40%"
                  width="40%"
                />
                <div className="cont">
                  <h2>Name: {curElem.name}</h2>
                  <h3>Rating: {curElem.rating}</h3>
                  <p>Description: {curElem.description}</p>
                  <p>Genre: {curElem.genre}</p>
                  <p>Cast: {curElem.cast}</p>
                  <a href={curElem.watch_url} target="_blank">
                    <button>Watch Now</button>
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Card;
