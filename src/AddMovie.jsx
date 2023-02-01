import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  const addMovie = async () => {
    const newMovie = {
      name: name,
      poster: poster,
      summary: summary,
      rating: rating,
      trailer: trailer,
    };
    console.log(newMovie);

    await fetch("https://63d7b5665dbd7232442b44da.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers:{
        "Content-Type": "application/json",
      },
    });
      //.then(data => data.json())
      //.then((mvs) => setMovieList(mvs));

    navigate("/movies")
  };

  return (
    <div className="add-movie-form">
      <TextField
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="outlined" 
        />
      <TextField
        onChange={(event) => setPoster(event.target.value)}
        label="Poster"
        variant="outlined" 
      />
      <TextField
        onChange={(event) => setRating(event.target.value)}
        label="Rating"
        variant="outlined" 
      />
      <TextField
        onChange={(event) => setSummary(event.target.value)}
        label="Summary"
        variant="outlined" 
      />
      <TextField
        onChange={(event) => setTrailer(event.target.value)}
        label="Trailer"
        variant="outlined" 
      />

      {/* Copy existing 'MovieList' & add newMovie to it */}
      {/*<button
                onClick={() => {
                  const newMovie = {
                    name : name,
                    poster : poster,
                    summary : summary,
                    rating : rating,
                  };
          
                  setMovieLst([...movieList,newMovie])
                  console.log (newMovie);
                }}
                >
                  Add Movie
              </button> */}
      <Button onClick={addMovie} variant="contained">
        Add Movie
      </Button>
      {/*<p>
            {name} - {poster} - {rating} - {summary}
          </p> */}
    </div>
    );
}
