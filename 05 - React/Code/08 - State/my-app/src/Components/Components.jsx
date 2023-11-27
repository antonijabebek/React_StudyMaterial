import { useState } from "react";


export default function Counter() {

const [age, setAge] = useState(26);
const [name, setName] = useState("Antonija");
const [isFemale, setFemale] = useState(false);

const [counter, setCounter] = useState(0);
function changeName() {
    let newName = prompt("What is the new name?"); setName(newName);
}

    return (
        <div>
            <h1> User State - React Hooks</h1>
            <p> User age: {age} </p>
            <p>User name: {name} </p>
            <p> User gender: {isFemale ? "Female" : "Male"} </p>
            <p> Counter: {counter}</p>
            <button onClick={() => setCounter(counter+1)}> Increase the count </button>
            <button onClick= {changeName}> Change name</button>
        </div>
    );
}

