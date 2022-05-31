import React from "react";
import "./style.css";

function ImageWrapper ({image, year, starring, movieName}) {

    return  <div className="img-wrapper">
                <h5 className="img-title">{movieName} </h5>
                <h6 className="img-title">starring : <br></br>{starring}</h6>
                <img className="img" src={image.imageUrl} alt={year}></img>
            </div>
}

export default ImageWrapper;