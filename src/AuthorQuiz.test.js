import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, {mount, shallow,render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


const state ={
  turnData:{
    books:['The adventures of huckleberry finn', 'life in jungle', 'the movement'],
author:{
  name: 'Mark Twain',
  imageUrl: 'images/authors/marktwain.jpg',
  imageSoure: 'wikimedia commons',
  books: ['Life in Missisipi', 'life in africa', 'the reptiles','The adventures of huckleberry finn', 'life in jungle', 'the movement']
},
},
highlight: 'none',
}

describe("Author Quiz", () => {
it("renders without crashing", () =>{
  const div = document.createElement("div");
  ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected= {() =>{}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe("When no answer has been selected", () =>{
  let wrapper;
  beforeAll(() =>{
    wrapper = mount(<AuthorQuiz{...state} onAnswerSelected = {() =>{}} /> );
  });
  it("should  have no background color",()=>{
    expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe("");
  });
});
describe("when the wrong answer has been selected", () =>{
  let wrapper;
  beforeAll(() =>{
    wrapper = mount(<AuthorQuiz{...(object.assign({}, state, {highlight: 'wrong'}))} onAnswerSelected ={() =>{}} /> );
  });

  it("should have a red background color", () =>{
    expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe("red");
  });
});
describe("when the correct answer has been selected", () =>{
  let wrapper;
  beforeAll(() =>{
    wrapper = mount(<AuthorQuiz{...(object.assign({}, state, {highlight: 'correct'}))} onAnswerSelected ={() =>{}} /> );
  });

  it("should have a green background color", () =>{
    expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe("green");
  });
});
});
