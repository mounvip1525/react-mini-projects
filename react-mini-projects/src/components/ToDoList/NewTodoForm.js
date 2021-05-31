import React, { Component } from 'react'

export default class NewTodoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            todo : ""
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="todo">New Todo</label>
                    <input 
                        placeholder="New Todo"
                        id="todo"
                        name="todo"
                        type="text"
                        value={this.state.todo}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}
