import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import 'bootstrap/dist/css/bootstrap.css';

import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from  'underscore';

const authors =[
  {
  name: 'Mark Twain',
  imageUr1: 'images/authors/marktwain.jpg',
  imageSourec: 'wikimedia commons',
  books: ['The adventures of huckleberry finn', 'life in jungle', 'the movement']
},
{
name: 'william shakespear',
imageUr1: 'images/authors/williamshakespear.jpg',
imageSourec: 'wikimedia commons',
books: ['roughing it till making it', 'sshades of tear', 'good memory']
},
{
name: 'jkrow ling',
imageUr1: 'images/authors/jkrowling.jpg',
imageSourec: 'wikimedia commons',
books: ['Life in Missisipi', 'life in africa', 'the reptiles']
},
{
name: 'charles dickens',
imageUr1: 'images/authors/charlesdickens.jpg',
imageSourec: 'wikimedia commons',
books: ['roughing it till making it', 'sucess', 'welldone']
},
{
name: 'joseph conrad',
imageUr1: 'images/authors/josephconrad.jpg',
imageSourec: 'wikimedia commons',
books: ['The good times', 'safari', 'love in the wild']
},
{
name: 'stephen king',
imageUr1: 'images/authors/stephenking.jpg',
imageSourec: 'wikimedia commons',
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
const state ={
  turnData: getTurnData(authors)
};
ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
