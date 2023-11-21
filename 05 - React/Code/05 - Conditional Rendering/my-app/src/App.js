
import React from "react";

function ConditionalRendering ({Number}) {
 return (
  <div>
    {props.number === undefined ? null : (<h2> Number sent via props: {props.number}</h2>)}
  </div>
 )


}

function App() {
  return (
    <div className="App">   
    
     </div>
  );
}

