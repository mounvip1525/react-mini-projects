import React , { Component } from "react";
import NewTodoForm from "../components/ToDoList/NewTodoForm";
import ToDo from "../components/ToDoList/ToDo";
import '../components/ToDoList/styles.css'
import { CSSTransition, TransitionGroup } from "react-transition-group";

class ToDoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : []
        }
        this.createTodo=this.createTodo.bind(this);
        this.removeTodo=this.removeTodo.bind(this);
        this.updateTodo=this.updateTodo.bind(this);
        this.toggleStrike=this.toggleStrike.bind(this);
    }
    createTodo(newTodo){
        this.setState({
            todos: [...this.state.todos,newTodo]
        })
    }
    removeTodo(id){
        this.setState({
            todos:this.state.todos.filter(todo=>todo.id !== id)
        })
    }
    updateTodo(id,updatedTodo){
        const updateTodoList = this.state.todos.map(todo=>{
            if( todo.id === id ){
                return {...todo , todo:updatedTodo }
            }
            else return todo;
        })
        this.setState({
            todos:updateTodoList
        })
    }
    toggleStrike(id){
        const updateTodoList = this.state.todos.map(todo=>{
            if( todo.id === id ){
                return {...todo , completed:!todo.completed }
            }
            else return todo;
        })
        this.setState({
            todos:updateTodoList
        })
    }
    render(){
        const todos = this.state.todos.map(todo=>{
            return (
                <CSSTransition key={todo.id} timeout={500} classNames='todo'>
                    <ToDo 
                        key={todo.id} 
                        todo={todo.todo} 
                        id={todo.id} 
                        removeTodo={this.removeTodo} 
                        updateTodo={this.updateTodo}
                        completed={todo.completed} 
                        toggleStrike={this.toggleStrike}/> 
                </CSSTransition>
            )
        });
        return(
            <div className='TodoList'>
                <h1>
                    Get To Work! <span>An Animated Todo List Made With React.</span>
                </h1>
                <NewTodoForm createTodo={this.createTodo}/>
                <ul>
                    <TransitionGroup className='todo-list'>{todos}</TransitionGroup>
                </ul>
            </div>
        );
    }
}

export default ToDoList;