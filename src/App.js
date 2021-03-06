  import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


library.add(faTrash);

class App extends Component{
  constructor(props){
    super(props);
    
    this.state={
      items:[],
      editItem:false,
      key:Date.now(),
      currentItem:{
        text:"",
        key:"",
      
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    

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
    if(newitem.text !== ""){
      const items = [...this.state.items, newitem];
      this.setState({
        items: items,
        editItem:false,
        currentItem:{
          text:"",
          key:"",
        }
      })
    }
  }

  deleteItem(key){
    const filterItems = this.state.items.filter(item => item.key!==key);
    this.setState({
      items: filterItems
    })
  }
  handleEdit = key  => {
    const filterItems = this.state.items.filter(item => 
    item.key !== key);
    
const selectedItem = this.state.items.find(item => item.key === key);
console.log(selectedItem);
    this.setState({
      items:filterItems,
      editItem:true,
      key:key,
      currentItem:{
        text: selectedItem.text ,
      }
    });

  }
  

  render(){
  return (
    <div className="App">
      <header>
        <form id = "to-do-form" onSubmit={this.addItem}>
          <input 
          type="text" 
          placeholder="Say something" 
          value={this.state.currentItem.text}
          onChange={this.handleInput}
          editItem={this.state.editItem}
          />
          <button type="submit">
          {this.state.editItem ? "Edit" : "Add"}
          </button>
        </form>
      </header>
      <ListItems 
         items = {this.state.items}
         deleteItem = {this.deleteItem}
         handleEdit = {this.handleEdit}
         
         >
      </ListItems>
    </div>
  );
}
}

export default App;
