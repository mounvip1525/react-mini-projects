import React , { Component } from "react";
import NewTodoForm from "../components/ToDoList/NewTodoForm";
import ToDo from "../components/ToDoList/ToDo";

class ToDoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : [{task:"Hello"},{task:"Bye"}]
        }
    }
    render(){
        const todos = this.state.todos.map(todo=>{
            return <ToDo task={todo.task} /> })
        return(
            <div>
                <h1>ToDo List</h1>
                <NewTodoForm />
                {todos}
            </div>
        );
    }
}

export default ToDoList;