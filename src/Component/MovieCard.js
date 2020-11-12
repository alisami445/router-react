import { useState } from "react";
import React from "react";

const Card = (props) => {
  const [Id, setId] = useState("");

  const MovieId = (e) => {
    setId(props.id);
    console.log(e.target.Id);
  };
  return (
    <>
      <div className="card text-center shadow">
        <div className="overflow">
          <img src={props.imgsrc} alt="Image1" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card_title">{props.Title}</h4>
          <p>{props.rating} ☆</p>
          <p className="card-text text-secondary">{props.description}</p>
          <a
            href="/description"
            className="btn btn-outline-success"
            onClick={MovieId}
          >
            Watch it !
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
