import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export function MovieList() {

  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch("https://63d7b5665dbd7232442b44da.mockapi.io/movies", {
      method: "GET",
    })
     .then(data => data.json())
     .then((mvs) => setMovieList(mvs));
  }

  useEffect(() => getMovies(), []);

  // Technique 1;
  //const deleteMovie = (id) => {
     //console.log("Deleting movie...", id);
     //Delete  → movie (refresh data)
    //fetch(`https://63d7b5665dbd7232442b44da.mockapi.io/movies/${id}`, {
      //method: "DELETE",
    //}).then(() => getMovies());

    // getMovies();
  //};
 
  // Technique 2;
  const deleteMovie = async (id) => {
    console.log("Deleting movie...", id);
    await fetch(`https://63d7b5665dbd7232442b44da.mockapi.io/movies/${id}`, {
      method: "DELETE",
    });
    getMovies();
  };

  return (
    <div>
      <div className="movie-list">
        {movieList.map((mv) => (
          <Movie 
            key={mv.id} 
            movie={mv} id={mv.id} 
            deleteButton={
              <IconButton 
                color="error" 
                sx={{margin:"auto"}}
                onClick={() => deleteMovie(mv.id)}>
                <DeleteIcon />
              </IconButton>}
          />
        ))}
      </div>
    </div>
  );
}

