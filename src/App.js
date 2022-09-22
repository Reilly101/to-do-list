import React from "react";
//import logo from "./logo.svg";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      
    </div>
  );
}
function Btn(){
  
const [count, setCount] = React.useState(0);
// let count = 0;

// function setCount(num){
//   count = num
//   console.log(count)
// }

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <RedOrGreen num={count}/> 
    </>
  );
}

function RedOrGreen(props){
  return(
    <div style={{backgroundColor: (props.num%2) ?'green':'red', width:'50px', height:'50px'}}></div>
  )
}

export default App;
