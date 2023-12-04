import './App.css';
import React from 'react';

const userContext = React.createContext() 

export default function App() {
  return (
    <div>
      <userContext.Provider value= {{
        user: 'Nino Škuflić',
        lastAccess: '4/12/2023 20:24:20 CEST',
        didLogOut: true
      }}>
{/*Pozivati komponente*/}
      </userContext.Provider>
    
    </div>
  );
}


function User() {
  return (
    <userContext.Consumer>
      {value => <h1> User Data</h1>}
      <p> The user is: {value.user} </p>
      <p> Last access: {value.lastAccess}</p>
    </userContext.Consumer>
  )
}