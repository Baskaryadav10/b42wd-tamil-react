import { Counter } from "./Counter";

// Component declaration | Object destructuring
export function Msg({ pic, name }) {
  // JS Starts here
  //console.log(props)
  //const {pic,name} = props;
  // JS Ends here
  return (
    // JSX Starts here
    <div>
      <img className="user-pic" src={pic} alt={name} />
      <h1>
        Hello, <span className="user-name">{name}</span>🎊🎊😍🎉🐯
      </h1>
      <Counter />
    </div>
    // JSX Ends here
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

//export default App;  // default export

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