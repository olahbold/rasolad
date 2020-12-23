import data from "../data";
import Services from "./Services";

import React, { Component } from 'react'

export default class Servicehandler extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data :data 
        }
        this.clickme = this.clickme.bind(this)
    }
    clickme() {

        console.log('i am clicked')
    }
    render() {
        const todoitems = this.state.data.map( item => {

            <div>
                


            </div>
        } )
        return (
            <div>
                {todoitems }
            </div>
            
           
            
        )
    }
}


















