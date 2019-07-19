import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,  withRouter} from "react-router-dom";
import AddAuthorForm from './AddAuthorForm';

import './index.css';
import AuthorQuiz from './AuthorQuiz';
import 'bootstrap/dist/css/bootstrap.css';

import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from  'underscore';

const authors =[
  {
  name: 'Mark Twain',
  imageUrl: 'images/authors/marktwain.jpg',
  imageSoure: 'wikimedia commons',
  books: ['The adventures of huckleberry finn', 'life in jungle', 'the movement']
},
{
name: 'william shakespear',
imageUrl: 'images/authors/williamshakespear.jpg',
imageSoure: 'wikimedia commons',
books: ['roughing it till making it', 'sshades of tear', 'good memory']
},
{
name: 'jkrow ling',
imageUrl: 'images/authors/jkrowling.jpg',
imageSoure: 'wikimedia commons',
books: ['Life in Missisipi', 'life in africa', 'the reptiles']
},
{
name: 'charles dickens',
imageUrl: 'images/authors/charlesdickens.jpg',
imageSoure: 'wikimedia commons',
books: ['roughing it till making it', 'sucess', 'welldone']
},
{
name: 'joseph conrad',
imageUrl: 'images/authors/josephconrad.jpg',
imageSoure: 'wikimedia commons',
books: ['The good times', 'safari', 'love in the wild']
},
{
name: 'stephen king',
imageUrl: 'images/authors/stephenking.jpg',
imageSoure: 'wikimedia commons',
books: ['working  on something','good king', 'wake up']
}
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function(p, c, i){
    return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomBooks);
  return{
    books: fourRandomBooks,
    author:authors.find((author) => author.books.some((title) => title === answer ))
  }
}
function resetState() {
  return{
    turnData: getTurnData(authors),
    highlight: ''
  };

}
let state = resetState();

function onAnswerSelected(answer) {
const isCorrect = state.turnData.author.books.some((book) => book === answer);
state.highlight =  isCorrect ? 'correct' : 'wrong';
render ();
}



function App(){
  return <AuthorQuiz {...state}
  onAnswerSelected={onAnswerSelected}
  onClick={() =>{
    state = resetState();
    render();
  }} />;
}
const AuthorWrapper = withRouter(({history})=>
  <AddAuthorForm onAddAuthor={(author) => {
    authors.push(author);
    history.push('/');
  }} />
);
function  render(){
  ReactDOM.render(
    <BrowserRouter>
         <React.Fragment>
           < Route  exact path="/" component={App} />
            < Route path="/add" component={AuthorWrapper} />
         </React.Fragment>
      </BrowserRouter>, document.getElementById('root'));
}


render ();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
