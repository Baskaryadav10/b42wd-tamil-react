import "./App.css";
import { Welcome, double } from "./Welcome"; // named import means having curly brackets
import { Counter } from "./Counter";
import { AddColor } from "./AddColor";
import { MovieList } from "./MovieList";
import { Msg } from "./Msg";
import { TicTacToe } from "./TicTacToe";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { NotFound } from "./NotFound";
import { Home } from "./Home";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AddMovie } from "./AddMovie";
import { MovieDetails } from "./MovieDetails";


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

  

  

  const navigate = useNavigate();

  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const bgStyles = {
    borderRadius: "0px",
    minHeight: "100vh",
  };

  
  const [movieList, setMovieList] = useState([]);
  
  

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={bgStyles} elevation={4}>
         <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => navigate("/")} color="inherit">Home</Button>
          <Button onClick={() => navigate("/tic-tac-toe")} color="inherit">Tic Tac Toe</Button>
          <Button onClick={() => navigate("/movies")} color="inherit">Movies</Button>
          <Button onClick={() => navigate("/color-game")} color="inherit">Color Game</Button>
          <Button onClick={() => navigate("/movies/add")} color="inherit">Add Movie</Button>
          <Button 
            sx={{ marginLeft : "auto"}}
            onClick={() => setMode(mode ==="light" ? "dark" : "light")} 
            color="inherit"
            startIcon= {
              mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
            }
          >
            {mode ==="light" ? "dark" : "light"} Mode</Button>
        </Toolbar>
      </AppBar>
      

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
        <Route path="/movies" element={<MovieList />} />
        {/* id → dynamic */}
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route 
          path="/movies/add" 
          element={<AddMovie movieList={movieList} setMovieLst={setMovieList}/>}
        />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>}

         </div>
      </ Paper>
    </ThemeProvider>
  );
}


export default App;  // default export

