import "./App.css";
import { Welcome, double } from "./Welcome"; // named import means having curly brackets
import { Counter } from "./Counter";
import { AddColor } from "./AddColor";
import { MovieList } from "./MovieList";
import { Msg } from "./Msg";

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
      {/*users.map((usr) => (
        <Msg name={usr.name} pic={usr.pic} />
      ))*/}  
      {/* Array of Strings —→ Array of JSX */}
      {/*name.map((nm) => (
        <Welcome name={nm} /> 
      ))*/}

      {/*<Counter /> */}
      {<MovieList /> }
      {/*<AddColor /> */}
    </div>
  );
}

{/*function Welcome({name}) {
  // JS Starts here
  //console.log(props)
  //const {pic,name} = props;
  // JS Ends here
  return(
    // JSX Starts here
    <div>
      <h1>
        Hello, <span className="user-name">{name}</span>🎊🎊😍🎉
      </h1>
    </div> 
    // JSX Ends here
  );
}*/}

export default App;  // default export

// Component declaration
//function Msg(props) {
  // JS Starts here
  //console.log(props)
  //const {pic,name} = props;
  // JS Ends here
  //return(
    // JSX Starts here
    //<div>
      //<img className="user-pic" src={props.pic} alt={props.name} />
      //<h1>
        //Hello, <span className="user-name">{props.name}</span>🎊🎊😍🎉
      //</h1>
    //</div> 
    // JSX Ends here
  //);
//}

// Component declaration
//function Msg(props) {
  // JS Starts here
  //console.log(props)
  //const name="Santhosh";
  //const name = props.name;
  // JS Ends here
  //return(
    // JSX Starts here
    //<div>
      //<h1>
        //Hello, <span className="user-name">{props.name}</span>🎊🎊😍🎉
      //</h1>
    //</div> 
    // JSX Ends here
  //);
//}

// Immutability

var x = 5; // Mutable

// 1000 lines of codes

console.log(x)

const y = 5;// Immutable

// 1000 lines of codes
// y = y+10
const z = y+10 ;

console.log(y)