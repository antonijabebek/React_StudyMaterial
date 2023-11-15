import './App.css';
import moment  from 'moment'
import random from 'random'



function App() {

  console.log(random);

  console.log(moment().format('DD MM YYYY, h:mm:ss a'));

  return (
    <div className="App">
      <h1> Ovo je naša aplikacija</h1>
    </div>
  );
}

export default App;
