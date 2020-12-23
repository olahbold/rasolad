
import data from "../data";
import Services from "./Services";

import React, { Component } from 'react'

export default class Servicehandler extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:data
        }
    }
    handleClickHandler (){
        this.setState()

    }
    render() {
        return (
            <div>
                {this.state.data.map(item =>{
                    
                   console.log(item)
                    
                })}
            </div>
        )
    }
}














