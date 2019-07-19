import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,//Form,Label, Input,
//  Button,
} from 'reactstrap';


import "./AddAuthorForm.css";

class AuthorForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      name:'',
      imageUrl: '',
      books: [],
      bookTemp: ''
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this);
  }
  handleSubmit(event){
  event.preventDefault();
  this.props.onAddAuthor(this.state);
  }
  onFieldChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleAddBook(event){
         this.setState({
           books: this.state.books.concat([this.state.bookTemp]),
           bookTemp: ''
         });
  }
  render(){
    return <div class="card-body text-center ">
    <form onSubmit={this.handleSubmit}>
                  <div className="form-group AddAuthorForm_input">
                    <label for="Name">Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange} className="form-control col-md-6 ml-auto mr-auto" />
                  </div>
                  <div className="form-group AddAuthorForm_input">
                    <label for="imageUrl">imageUrl</label>
                    <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange} className="form-control col-md-6 ml-auto mr-auto" />
                  </div>
                  <div className="form-group AddAuthorForm_input">
                  {this.state.books.map((book) =><p key={book}>{book}</p>)}
                  <label htmlFor="bookTemp">books</label>
                  <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange} className="form-control col-md-6 ml-auto mr-auto" />
                  <input type="Button" value="+" onClick={this.handleAddBook} />
                  </div>

                </form>
    </div>
  }
}
function AddAuthorForm({match, onAddAuthor}){
  return <div className="AddAuthorForm">

<Container>
<div class="card w-10" >
  <div class="card-header text-center">
  Add Author
  <AuthorForm onAddAuthor={onAddAuthor} />

  </div>
</div>;
</Container>
</div>;
}

 export default AddAuthorForm;
