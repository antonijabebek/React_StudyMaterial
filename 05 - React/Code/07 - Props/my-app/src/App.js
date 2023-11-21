import './App.css';
import { Student, University, Comment } from './compontents';

const comment = {
  date: new Date(),
  text: 'I love learning React!',
  author: {
    name: 'John Doe',
    url: 'https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg'
  }
}

export default function App() {
  return (
    <div className="App">
      <h1> Wellcome to Student Information System (SIS)</h1>
      <Student firstName='Marko' lastName='Markić' uuid='123450' />
      <Student firstName='Ivana' lastName='Horvat' uuid='847584' />
      <Student firstName='Johnny' lastName='Doe' uuid='45346' />

      <University name='Algebra' location='Zagreb' rank='#2 in the world' />
      <University name='Harvard' location='Cambridge, Massachusetts' rank='#1 in the world' />

      <comment date={comment.date} text={comment.text} author={comment.author} />
    </div>
  );
}

