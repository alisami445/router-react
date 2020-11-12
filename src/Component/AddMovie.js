import React, { useState } from "react";

const AddMovie = (props) => {
  const [title, setTitle] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleAdd = (e) => {
    e.preventDefault();
    let newTab = [];
    let currentState = props.tab;
    newTab = [
      ...currentState,
      { title, posterUrl, description, image, rating },
    ]; //how to add others state ???
    console.log(newTab);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter your title movie:</label>
          <input
            type="text"
            className="form-control"
            placeholder="title movie.."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Enter your posterUrl movie:</label>
          <input
            type="text"
            className="form-control"
            placeholder="posterUrl movie.."
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
          />
        </div>{" "}
        <div className="form-group">
          <label>Enter your description movie:</label>
          <input
            type="text"
            className="form-control"
            placeholder="description movie.."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>{" "}
        <div className="form-group">
          <label>Enter your rating movie:</label>
          <input
            type="text"
            className="form-control"
            placeholder="rating movie.."
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <div className="form-group">
            <label form="fichier">Enter your image movie</label>
            <input
              type="file"
              className="form-control-file"
              id="fichier"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={handleAdd}
            >
              ADD
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default AddMovie;
