import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";


export function MovieList({movieList, setMovieList}) {
  {/*const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");*/}
  
  

  return (
    <div>
      <AddMovie movieList={movieList} setMovieList={setMovieList}/>
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}

