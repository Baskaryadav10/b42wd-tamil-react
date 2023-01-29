import { useState } from "react";
import Button from '@mui/material/Button';
import { Movie } from "./Movie";
import TextField from '@mui/material/TextField';


export function MovieList({movieList, setMovieLst}) {
  ;
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div>
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
        <Button
          onClick={() => {
            const newMovie = {
              name: name,
              poster: poster,
              summary: summary,
              rating: rating,
            };

            setMovieLst([...movieList, newMovie]);
            console.log(newMovie);
          }} variant="contained">
          Add Movie
        </Button>
        {/*<p>
              {name} - {poster} - {rating} - {summary}
            </p> */}
      </div>
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}
