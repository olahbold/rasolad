import data from "../data";
import Services from "./Services";

import React, { Component } from 'react'

export default class Servicehandler extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data :data 
        }
        th
    }
    clickme() {

        console.log('i am clicked')
    }
    render() {
        return (
            <div>
                {this.state.data.map((item)  => {<div>
                    <button onClick = {this.clickme}>
                        {item.title}
                         </button>
                    </div>
                })}
            </div>
        )
    }
}


















