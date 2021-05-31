import React, { Component } from 'react'

export default class ToDo extends Component {
    render() {
        return (
            <div>
                <button>edit</button>
                <button>x</button>
                <li>{this.props.task}</li>
            </div>
        )
    }
}
