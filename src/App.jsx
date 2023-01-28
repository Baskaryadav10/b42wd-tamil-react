import "./App.css";
import { Welcome, double } from "./Welcome"; // named import means having curly brackets
import { Counter } from "./Counter";
import { AddColor } from "./AddColor";
import { MovieList } from "./MovieList";
import { Msg } from "./Msg";
import { TicTacToe } from "./TicTacToe";
import { Routes, Route, Link } from "react-router-dom";
import { NotFound } from "./NotFound";
import { Home } from "./Home";

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
        <Route path="/movies" element={<MovieList />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>}

    </div>
  );
}

export default App;  // default export

