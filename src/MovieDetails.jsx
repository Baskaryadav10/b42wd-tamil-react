import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  //console.log(movieList);
  const movie = movieList[id];
  console.log(movie);

  const styles = {
    color: movie.rating > 8.5 ? "green" : "crimson",
    //backgroundColor: "orange", // CamelCase
  };

  const navigate = useNavigate();

  return (
    <div>
      <iframe
        width="100%"
        height="650"
        src={movie.trailer}
        title="Marvel Studios’ Ant-Man and The Wasp: Quantumania | New Trailer"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name">
            {movie.name}
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
        {<p className="movie-summary">{movie.summary}</p>}

        {/*<p className={show ? 'green' : 'red'}>{movie.summary}</p> */}
        <Button
          startIcon={<KeyboardBackspaceIcon />}
          variant="contained"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
    </div>
  );

  //<div>
  //<h1>Movie Details page of {movie.name} </h1>
  //</div>
  //);
}
