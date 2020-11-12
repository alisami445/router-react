import React from "react";

export default function descriptionPage(props) {
  return (
    <>
      <h4>Description Movie Selected :</h4>
      <div className="card text-center shadow">
        <div className="overflow">
          <img src={props.imgsrc} alt="Image1" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card_title">{props.Id}</h4>
          <p>{props.rating} ☆</p>
          <p className="card-text text-secondary">
            description : {props.description}
          </p>
        </div>
      </div>
    </>
  );
}
