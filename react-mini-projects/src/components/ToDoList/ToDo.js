import React, { Component } from 'react'

export default class ToDo extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditing : false,
            updateTodo:this.props.todo
        }
        this.handleRemove=this.handleRemove.bind(this);
        this.handleToggle=this.handleToggle.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
    }
    handleRemove(){
        this.props.removeTodo(this.props.id)
    }
    handleToggle(){
        this.setState({isEditing:!this.state.isEditing})
    }
    handleUpdate(e){
        e.preventDefault();
        this.props.updateTodo(this.props.id,this.state.updateTodo)
        this.setState({isEditing:false});
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        let result;
        if(this.state.isEditing){ 
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type="text" value={this.state.updateTodo} onChange={this.handleChange} name="updateTodo"/>
                        <button type="submit">Save</button>
                    </form>
                </div>
            )} else  result = (
                <div>
                    <button onClick={this.handleToggle}>edit</button>
                    <button onClick={this.handleRemove}>x</button>
                    <li>{this.props.todo}</li>
                </div>
            )
        return (
            result
        )
    }
}
