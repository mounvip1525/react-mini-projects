import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default class NewTodoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            todo : "",
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createTodo({...this.state,id:uuidv4()});
        this.setState({
            todo:""
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="todo">New Todo</label>
                    <input 
                        placeholder="New Todo"
                        id="todo"
                        name="todo"
                        type="text"
                        value={this.state.todo}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}
