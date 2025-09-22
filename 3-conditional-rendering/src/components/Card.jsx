import React from 'react'

function Card() {
    const cardTitle = "Queen Of Tears";
    const cardRating = 8.7;
    const cardImage = "qot.jpg";
    const cardDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos suscipit laborum officiis error culpa tempora eum magnam quaerat fugit odit?";
    const age = 16;
    const genreName = () => {
        const genre = "Drama";
        return genre;
    }

    // 1st tareeqa 
    // if(age < 18){
    //     return(
    //     <div className="card">
    //     <img src={cardImage} alt="qot.jpb" height="40%" width="40%"/>
    //     <div className="cont">
    //         <h2>Name: {cardTitle}</h2>
    //         <h3>Rating: {cardRating}</h3>
    //         <p>{cardDescription}</p>
    //         <p>{genreName()}</p>
    //         <button>Not Available</button>
    //     </div>
    // </div>
    //     )
    // }

    // 3rd tareeqa
    // let canWatch = "Not Available";
    // if(age>=18){
    //     canWatch = "Watch Now";
    // }

    // 4th tareeqa
    const canWatch = () => {
        if(age>=18){
            return "Watch Now";
        }
        else{
            return "Not Available";
        }
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
            {/* 1st tareeqa */}
            {/* <button>Watch Now</button> */}
            {/* 2nd tareeqa */}
            {/* <button>{age>=18?"Watch Now":"Not Available"}</button> */}
            {/* 3rd tareeqa */}
            {/* <button>{canWatch}</button> */}
            {/* 4th tareeqa */}
            <button>{canWatch()}</button>
        </div>
    </div>
    </>
  )
}

export default Card