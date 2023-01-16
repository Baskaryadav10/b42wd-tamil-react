import "./App.css";

// Logic + View = Component
// Component declaration
export default function App() {
  return (
    <div className="App">
      <Msg 
      name="Ramya" 
      pic="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427"
      />
      <Msg 
      name="Ash" 
      pic="https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg?w=2000"
      />
      <Msg 
      name="Logan" 
      pic="https://www.thesun.co.uk/wp-content/uploads/2022/05/4336AA26-D141-11EC-8F12-0A7D8980E56F.jpeg"
      />
    </div>
    );
}

// Component declaration
function Msg({pic,name}) {
  // JS Starts here
  //console.log(props)
  //const {pic,name} = props;
  // JS Ends here
  return(
    // JSX Starts here
    <div>
      <img className="user-pic" src={pic} alt={name} />
      <h1>
        Hello, <span className="user-name">{name}</span>🎊🎊😍🎉
      </h1>
    </div> 
    // JSX Ends here
  );
}

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