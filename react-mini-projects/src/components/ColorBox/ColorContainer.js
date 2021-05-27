import React, { Component } from 'react'
import Box from './Box';
import './styles.css';

export default class ColorContainer extends Component {
    static defaultProps = {
        numBoxes:32,
        allColors : ["#EAD5E8" , "#D2AACF" , "#B87DB5"  , "#A0529C"  , "#8A2887" , "#682265" ,"#450F44" , "#2e1530"]
    };
    render() {
        const boxes = Array.from({length:this.props.numBoxes}).map(()=>(
            <Box colors={this.props.allColors} />
        ));
        return <div className="Color-box"> {boxes} </div>
    }
}
