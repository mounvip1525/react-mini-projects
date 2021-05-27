import React, { Component } from 'react'
import Box from './Box';
import './styles.css';

export default class ColorContainer extends Component {
    static defaultProps = {
        numBoxes:18
    };
    render() {
        const boxes = Array.from({length:this.props.numBoxes}).map(()=>(
            <Box />
        ));
        return <div className="Color-box"> {boxes} </div>
    }
}
