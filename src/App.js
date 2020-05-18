import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    
    this.state={
      items:[],
      currentItem:{
        text:"",
        key:"",
      
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);

  }

  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now(),
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newitem = this.state.currentItem;
    console.log(newitem);
  }

  render(){
  return (
    <div className="App">
      <header>
        <form id = "to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Say something" value={this.state.currentItem.text}
          onChange={this.handleInput}/>
          <button type="submit">Add</button>
        </form>
      </header>
    </div>
  );
}
}

export default App;
