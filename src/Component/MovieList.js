import React, { Component } from "react";
import AddMovie from "./AddMovie";
import MovieCard from "./MovieCard";
import Search from "./SearchBar";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          _id: "1",
          title: "DORRA",
          posterUrl: "www.google.com",
          description:
            "Dora and the Lost City directed by James Bobin with Isabela Merced ",
          image: "/images/M1.jpg",
          rating: 4.5,
        },
        {
          _id: "2",
          title: "JOHN WICK",
          posterUrl: "www.movie2.com",
          description:
            "John Wick is an American film series featuring Keanu Reeve",
          image: "/images/M2.jpg",
          rating: 3.5,
        },
        {
          _id: "3",
          title: "TENET",
          posterUrl: "www.movie3.com",
          description:
            "Tenet is a British-American film directed by Christopher Nolan.",
          image: "/images/M3.jpg",
          rating: 4,
        },
        {
          _id: "4",
          title: "BAAGHI 3",
          posterUrl: "www.movie4.com",
          description:
            "Produced by Nadiadwala Grandson Entertainment and Fox Star Studios",
          image: "/images/M4.jpg",
          rating: 3,
        },
      ],
      currentlist: [
        {
          _id: "1",
          title: "DORRA",
          posterUrl: "www.google.com",
          description:
            "Dora and the Lost City directed by James Bobin with Isabela Merced ",
          image: "/images/M1.jpg",
          rating: 4.5,
        },
        {
          _id: "2",
          title: "JOHN WICK",
          posterUrl: "www.movie2.com",
          description:
            "John Wick is an American film series featuring Keanu Reeve",
          image: "/images/M2.jpg",
          rating: 3.5,
        },
        {
          _id: "3",
          title: "TENET",
          posterUrl: "www.movie3.com",
          description:
            "Tenet is a British-American film directed by Christopher Nolan.",
          image: "/images/M3.jpg",
          rating: 4,
        },
        {
          _id: "4",
          title: "BAAGHI 3",
          posterUrl: "www.movie4.com",
          description:
            "Produced by Nadiadwala Grandson Entertainment and Fox Star Studios",
          image: "/images/M4.jpg",
          rating: 3,
        },
      ],
    };
    
  }
 

  filterMovie = (e) => {
    
    if (e.target.value !== "") {
      this.setState({
        title: e.target.value,
        list: this.state.list.filter(
          (movie) =>
            movie.title.toUpperCase().indexOf(e.target.value.toUpperCase()) >= 0
        ),
      });
    } else {
       return this.setState({ title: e.target.value, list: this.state.currentlist });
    }
  };

  render() {
    return (
      <>
        <Search filterMovie={this.filterMovie} title={this.state.title}  />

        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            {this.state.list.map((movie) => (
              <div className="col-md-3" key={movie._id}>
                <MovieCard
                  imgsrc={movie.image}
                  Title={movie.title}
                  description={movie.description}
                  rating={movie.rating}
                  posterUrl={movie.posterUrl}
                  id={movie._id}
                />
              </div>
            ))}
          </div>
        </div>
        <hr />
        <AddMovie tab={this.state.list} />
      </>
    );
  }
}

export default Cards;
