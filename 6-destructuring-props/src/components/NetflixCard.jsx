import React from 'react'

function NetflixCard({data}) {
  const {id, img_url, name, rating, description, genre, cast, watch_url} = data;
  return (
    <>
    
    <li>
              <div className="card">
                <img
                  src={img_url}
                  alt={name}
                  height="40%"
                  width="40%"
                />
                <div className="cont">
                  <h2>Name: {name}</h2>
                  <h3>Rating: {rating}</h3>
                  <p>Description: {description}</p>
                  <p>Genre: {genre}</p>
                  <p>Cast: {cast}</p>
                  <a href={watch_url} target="_blank">
                    <button>Watch Now</button>
                  </a>
                </div>
              </div>
            </li>
    </>
  )
}

export default NetflixCard