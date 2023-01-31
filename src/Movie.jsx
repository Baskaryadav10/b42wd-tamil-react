import { useState } from "react";
import { Counter } from "./Counter";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";

export function Movie({ movie,id }) {
  // Conditional Styling | ? : → ternary operator
  const styles = {
    color: movie.rating > 8.5 ? "green" : "crimson",
    //backgroundColor: "orange", // CamelCase
  };

  // Manage state | Independent | Accelerator
  const [show, setShow] = useState(true);

  // Derived state | dependent | Speedometer
  //const summaryStyles ={
  //display : show ? "block" : "none" ,
  //}
  //const movie = {
  //"name": "Vikram",
  //"poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
  //"rating": 8.4,
  //"summary": "Members of a black ops team must track and eliminate a gang of masked murderers."
  //};

const navigate = useNavigate();

  return (
    <Card className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <CardContent>
        <div className="movie-specs">
          <h2 className="movie-name">
            {movie.name}
            <IconButton
              color="primary"
              onClick={() => setShow(!show)}
              aria-label="Toggle summary"
            >
              {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
            </IconButton>
            <IconButton
              color="primary"
              // /movies/index
              onClick={() => navigate(`/movies/${id}`)}
              aria-label="Movie details"
            >
              <InfoIcon />
            </IconButton>
          </h2>
          <p style={styles} className="movie-rating">
            ⭐ {movie.rating}
          </p>
        </div>

        {/* Conditional Styling - only style updated */}
        {/* <p style={summaryStyles} className="movie-summary">
              {movie.summary} 
            </p> */}

        {/* Conditional Rendering - Removed from DOM */}  
        {show ? <p className="movie-summary">{movie.summary}</p>: null}  
      </CardContent>
      {/*<p className={show ? 'green' : 'red'}>{movie.summary}</p> */}
      
      <CardActions>
        <Counter />
      </CardActions>
      
    </Card>);
  }
