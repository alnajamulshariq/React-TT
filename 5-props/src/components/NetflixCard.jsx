import React from 'react'

function NetflixCard(props) {
  return (
    <>
    <li>
              <div className="card">
                <img
                  src={props.curElem.img_url}
                  alt={props.curElem.name}
                  height="40%"
                  width="40%"
                />
                <div className="cont">
                  <h2>Name: {props.curElem.name}</h2>
                  <h3>Rating: {props.curElem.rating}</h3>
                  <p>Description: {props.curElem.description}</p>
                  <p>Genre: {props.curElem.genre}</p>
                  <p>Cast: {props.curElem.cast}</p>
                  <a href={props.curElem.watch_url} target="_blank">
                    <button>Watch Now</button>
                  </a>
                </div>
              </div>
            </li>
    </>
  )
}

export default NetflixCard