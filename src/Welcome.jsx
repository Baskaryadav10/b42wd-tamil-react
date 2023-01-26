// named export
//export function Welcome({name}) {
 function Welcome({name}) {
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
  }
// named export
  //export const double = (n) => n * 2;
  const double = (n) => n * 2;

  export {Welcome, double}