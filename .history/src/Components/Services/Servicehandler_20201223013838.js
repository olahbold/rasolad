import './service.css'
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
            <div className = 'test'>
                {this.state.data.map(item =>{
                    <p>
                          <onClick = {this.handleClickHandler.bind(this)} className = 'testing'> goods</a>
                    </p>
                  
                    
                })}
            </div>
        )
    }
}














