import React from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import MovieList from "./Component/MovieList";
import Description from "./Component/descriptionPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link exact="true" to="/">
          <h1>My Movie</h1>
        </Link>

        <hr />
        <Link to="/description"></Link>

        <Route exact path="/" component={MovieList} />
        <Route path="/description" component={Description} />
      </div>
    </BrowserRouter>
  );
}
  
export default App;
