import React , { Component } from "react";
import NewTodoForm from "../components/ToDoList/NewTodoForm";
import ToDo from "../components/ToDoList/ToDo";

class ToDoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : []
        }
        this.createTodo=this.createTodo.bind(this);
        this.removeTodo=this.removeTodo.bind(this);
        this.updateTodo=this.updateTodo.bind(this);
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
    render(){
        const todos = this.state.todos.map(todo=>{
            return <ToDo key={todo.id} todo={todo.todo} id={todo.id} removeTodo={this.removeTodo} updateTodo={this.updateTodo}/> })
        return(
            <div>
                <h1>ToDo List</h1>
                <NewTodoForm createTodo={this.createTodo}/>
                {todos}
            </div>
        );
    }
}

export default ToDoList;