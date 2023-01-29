import "./App.css";
import { Welcome, double } from "./Welcome"; // named import means having curly brackets
import { Counter } from "./Counter";
import { AddColor } from "./AddColor";
import { MovieList } from "./MovieList";
import { Msg } from "./Msg";
import { TicTacToe } from "./TicTacToe";
import { Routes, Route, Link, useParams, useNavigate, Navigate } from "react-router-dom";
import { NotFound } from "./NotFound";
import { Home } from "./Home";
import { useState } from "react";
import Button from '@mui/material/Button';

const INITIAL_MOVIE_LIST = [
  {
    "id": "99",
    "name": "Vikram",
    "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    "rating": 8.4,
    "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
    "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
  },
  {
    "id": "100",
    "name": "RRR",
    "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    "rating": 8.8,
    "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
  },
  {
    "id": "101",
    "name": "Iron man 2",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    "rating": 7,
    "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
  },
  {
    "id": "102",
    "name": "No Country for Old Men",
    "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    "rating": 8.1,
    "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
  },
  {
    "id": "103",
    "name": "Jai Bhim",
    "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    "rating": 8.8,
    "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
  },
  {
    "id": "104",
    "name": "The Avengers",
    "rating": 8,
    "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
  },
  {
    "id": "105",
    "name": "Interstellar",
    "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    "rating": 8.6,
    "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    "id": "106",
    "name": "Baahubali",
    "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    "rating": 8,
    "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
  },
  {
    "id": "107",
    "name": "Ratatouille",
    "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    "rating": 8,
    "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
  },
  {
    "name": "PS2",
    "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
    "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
    "rating": 8,
    "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
    "id": "108"
  },
  {
    "name": "Thor: Ragnarok",
    "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
    "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
    "rating": 8.8,
    "trailer": "https://youtu.be/NgsQ8mVkN8w",
    "id": "109"
  }
];


console.log(double(10));
// Logic + View = Component
// Component declaration
//export default function App() {
function App() {
  const name = ["Vijay", "Ajith", "Surya", "Dhanush", "Vikram"];
  const users = [
    {
      name:"Ramya" ,
      pic:"https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427"
    },
    {
      name:"Ash",
      pic:"https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg?w=2000"
    },
    {
      name:"Priya" ,
      pic:"https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427"
    },
    {
      name:"Logan" ,
      pic:"https://www.thesun.co.uk/wp-content/uploads/2022/05/4336AA26-D141-11EC-8F12-0A7D8980E56F.jpeg"
    },
  ];

  

  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);


  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tic-tac-toe">Tic Tac Toe Game</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/color-game">Color Game</Link>
          </li>
        </ul>  
      </nav>

      {/*users.map((usr) => (
        <Msg name={usr.name} pic={usr.pic} />
      ))*/}  
      {/* Array of Strings —→ Array of JSX */}
      {/*name.map((nm) => (
        <Welcome name={nm} /> 
      ))*/}

      {/*<Counter /> */}
      {/*<MovieList /> */}
      {/*<AddColor /> */}
      {/*<TicTacToe /> */}

      {/* Task */ }
      {/* /movies → <MovieList />*/}
      {/* /color-game →*/ }

      {<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        {/*<Route path="/films" element={<Navigate to replace="/movies" />} />*/}
        <Route path="/movies" element={<MovieList movieList={movieList} setMovieLst={setMovieList}/>} />
        {/* id → dynamic */}
        <Route path="/movies/:id" element={<MovieDetails movieList={movieList}/>} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>}

    </div>
  );
}


function MovieDetails({movieList}) {
  const {id} = useParams();
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
        <Button variant="contained" onClick={() => navigate(-1)}>Back</Button>
      </div>
    </div>
  );

    //<div>
      //<h1>Movie Details page of {movie.name} </h1>
    //</div>
  //);
}

export default App;  // default export

