import React,{ Component } from 'react'
import '../AddItem.css'

class AddItem extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        let newTodo = this.refs.newTodo.value;
        this.props.onAdd(newTodo)
    }

    render(){
        return(
            <div>
                <form id="add-form" onSubmit={this.handleSubmit}>
                    <input className="add-input" type="text" placeholder="Have anything todo?" ref="newTodo"/>
                    <input className="add-submit" type="submit" value="Submit"  />
                </form>
            </div>
        )
    }
}

export default AddItem;