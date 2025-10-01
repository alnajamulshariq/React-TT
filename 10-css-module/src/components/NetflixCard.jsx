import React from "react";
import styles from './Netflix.module.css'

function NetflixCard({ data }) {
  const { id, img_url, name, rating, description, genre, cast, watch_url } =
    data;

  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >=8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--btn-color)",
    fontWeight: "bold",
    cursor: "pointer",
  }  

  const ratingClass = rating >=8.5 ? styles.super_hit : styles.average;
  return (
    <>
      <li className={styles.card}>
        <div>
          <img src={img_url} alt={name} height="40%" width="40%" />
        </div>  
          <div className={styles["card-content"]}>
            <h3>Name: {name}</h3>
            <h4>Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span></h4>
            <p> Description: {description}</p>
            <p>Genre: {genre}</p>
            <p>Cast: {cast}</p>
            <a href={watch_url} target="_blank">
              <button style={btn_style}>Watch Now</button>
            </a>
          </div>
      </li>
    </>
  );
}

export default NetflixCard;
