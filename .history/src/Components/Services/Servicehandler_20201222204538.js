import data from "../data";
import Services from "./Services";

import React, { Component } from 'react'

export default class Servicehandler extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data :data 
        }
    }
    clickme
    render() {
        return (
            <div>
                {this.state.data.map(item,index => {
                    <a  onClick = {this.clickme.bind(this)}>
                        {this.state.data.title}

                    </a>
                })}
            </div>
        )
    }
}


















