import React,{ Component } from 'react'
import '../TodoItem.css'

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(){
        let item = this.props.name;
        this.props.onDel(item)
    }

    render(){
        return(
            <div className="todo-item">
                <li className="todo-name" key={this.props.index}>{this.props.name}</li>
                <input className="todo-delete" type="submit" onClick={this.handleDelete} value="X"/>
            </div>
        )
    }
}

export default TodoItem;