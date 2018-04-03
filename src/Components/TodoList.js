import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component{
   render(){
       return(
        this.props.todos.map((value,index) => (
            <TodoItem key={index} name={value} onDel={this.props.onDelete}></TodoItem>
        ))
       );
   }   
}

export default TodoList;    