import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";
import { useState, useEffect } from "react";


export function MovieList() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch("https://63d7b5665dbd7232442b44da.mockapi.io/movies")
    .then(data => data.json())
    .then((mvs) => setMovieList(mvs));
  }, []);


  return (
    <div>
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}

