import React, { Component } from 'react';
import TodoList from './Components/TodoList'
import AddItem from './Components/AddItem'
import './App.css';
import './TodoList.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos:["Call mum","Add local storage to this react app", "Learn more, Do more"]
    }
  }
  DeleteItem = (item) => {
    let updatedTodos= this.state.todos.filter(val => {
      return val !== item;
    });
    this.setState({
      todos:updatedTodos
    })
  }

  AddItem = (item) => {
    let updatedTodos= this.state.todos
    updatedTodos.push(item)
    this.setState({
      todos:updatedTodos
    })
  }

  render() {
    return (
      <div className="App">
        <h2 className="App-header">Toodly</h2>  
        <TodoList className="todo-list" todos={this.state.todos} onDelete={this.DeleteItem}></TodoList>
        <div className="clear"></div>
        <AddItem onAdd={this.AddItem}></AddItem>
      </div>
    );
  }
}

export default App;
