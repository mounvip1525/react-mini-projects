import React, { Component } from 'react'
import './styles.css';
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
        this.handleStrike=this.handleStrike.bind(this);
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
    handleStrike(){
        this.props.toggleStrike(this.props.id);
    }
    render() {
        let result;
        if(this.state.isEditing){ 
            result= (
                <CSSTransition key='editing' timeout={500} classNames='form'>
                <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
                  <input
                    type='text'
                    value={this.state.todo}
                    name='updateTodo'
                    onChange={this.handleChange}
                  />
                  <button>Save</button>
                </form>
              </CSSTransition>
                );
            } else  result = (
                <CSSTransition key='normal' timeout={500} classNames='task-text'>
                    <li className='Todo-task' onClick={this.handleToggle}>
                        {this.props.todo}
                    </li>
              </CSSTransition>
            )
        return (
            <TransitionGroup
            className={this.props.completed ? "Todo completed" : "Todo"}
          >
            {result}
            <div className='Todo-buttons'>
              <button onClick={this.handleToggle}>
                <i class='fas fa-pen' />
              </button>
              <button onClick={this.handleRemove}>
                <i class='fas fa-trash' />
              </button>
            </div>
          </TransitionGroup>
        )
    }
}
