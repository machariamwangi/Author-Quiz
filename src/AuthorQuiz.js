import React from 'react';
import propTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

function Hero (){
  return(<div className="row">
  <div className="jumbotron col-10 offset-1">
  <h1>Author Quiz</h1>
  <p> Select the book written by the Author shown</p>
  </div>
  </div>);
}
function Book({title, onClick}) {
  return(
    <div className="answer" onClick ={() => {onClick(title);}}>
<h4>{title}</h4>
    </div>
  );
}

function Turn({author, books, highlight, onAnswerSelected}) {

function highlightToBgColor(highlight) {
  const mapping = {
    'none': '',
    'correct': 'green',
    'wrong': 'red'
  };
  return mapping[highlight];
}

  return(<div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
  <div className="col-4 offset-1">
  <img src={author.imageUrl} className="authorimage" alt="Author" />
  </div>

<div className="col-6">
{books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}
</div>
    </div>);
}
Turn.protoTypes = {
  author: propTypes.shape({
    name: propTypes.string.isRequired,
    imageUrl: propTypes.string.isRequired,
    imageSoure: propTypes.string.isRequired,
    books: propTypes.arrayOf(propTypes.string).isRequired
  }),
  books: propTypes.arrayOf(propTypes.string).isRequired,
  onAnswerSelected: propTypes.func.isRequired,
  highlight: propTypes.string.isRequired
};

function Continue() {
  return(<div />);
}

function Footer() {
  return(<div id="footer" className="row" >
<div className="col-12">
<p className="text-muted credit">
 All images are from
 < a href="htpp://commons.wikimedia.org/wiki/main"> wikimedia commons</a> and are in the public domain
 </p>
</div>

</div>);

}
function AuthorQuiz({turnData, highlight, onAnswerSelected}) {
  return (
    <div className="container-fluid">
<Hero />
<Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
<Continue />
<Footer />
    </div>
  );
}

export default AuthorQuiz;
