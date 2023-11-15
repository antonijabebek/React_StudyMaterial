import './App.css';


function App() {

  const name = 'Antonija';
  const user = {
    lastName: 'Bebek',
    age: '30'
  };
  return (
    <div className="App">
      <h1> User information</h1>
      <h2>{name} {user.lastName} is {user.age} years old. </h2>
    </div>
  );
}

export default App;
