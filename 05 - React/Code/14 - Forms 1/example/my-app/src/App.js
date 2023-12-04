import { useState } from 'react';
import './App.css';

export default function App() {
  const [value, setValue] = useState('Enter your name');

  const changeValue = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(value);
  }
  return (<App2 submit={handleSubmit} value={changeValue}/>)
}


function App2(props) {
  return (
    <div>
      <h1> Forms example</h1>
      <form onSubmit={props.submit}>
        <input type='text' value={Value} onChange={props.value}/>
        <button type='submit'> Submit</button>
        <button type='reset'> Reset</button>
      </form>
    </div>
  );
}


