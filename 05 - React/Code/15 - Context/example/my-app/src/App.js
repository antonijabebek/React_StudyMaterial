import './App.css';
import React from 'react';

const userContext = React.createContext()

export default function App() {
  return (
    <div>
      <userContext.Provider value={{
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

function LoggedOutUser() {
  return (
    <userContext.Consumer>
      {value => <h1> Logged out User Data</h1>}
      <p> The logged out user is: {value.user} </p>
      <p> User logged out: {value.didLogOut ? "yes, user is logged out." : "no, user is not logged out."}</p>
    </userContext.Consumer>
  )
}

function LoggedInUser() {
  return (
    <userContext.Consumer>
      {value => <h1> Logged in User Data</h1>}
      <p> The logged in user is: {value.user} </p>
      <p> User logged in: {value.didLogOut ? "yes, user is logged in." : "no, user is not logged in."}</p>
    </userContext.Consumer>
  )
}


