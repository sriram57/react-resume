import React, { Component } from 'react'

export default class state extends Component {
    constructor() {
        super();
        this.state = {
        text: 0
      }
    }
      
      changeText = () => {
        const { text } = this.state 
        this.setState({ text : text+1}); 
      } 
      changeText1 = () => {
        const { text } = this.state 
        this.setState({ text : 0}); 
      } 
      render() {
        const { text } = this.state 
        return (
            <>
            <h1>{text}</h1>
          <button 
             onClick={ () => { this.changeText()}  }> Click Here.... </button> 
             <button 
             onClick={ () => { this.changeText1()}  }>Reset</button> 
             </>
        )};
        }