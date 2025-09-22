import React from 'react'

function Card() {
    const cardTitle = "Queen Of Tears";
    const cardRating = 8.7;
    const cardImage = "qot.jpg";
    const cardDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos suscipit laborum officiis error culpa tempora eum magnam quaerat fugit odit?";
    const genreName = () => {
        const genre = "Drama";
        return genre;
    }
  return (
    <>
    <div className="card">
        <img src={cardImage} alt="qot.jpb" height="40%" width="40%"/>
        <div className="cont">
            <h2>Name: {cardTitle}</h2>
            <h3>Rating: {cardRating}</h3>
            <p>{cardDescription}</p>
            <p>{genreName()}</p>
        </div>
    </div>
    </>
  )
}

export default Card