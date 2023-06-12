import React, { Component } from 'react'
import "./App.css";

export default class App2 extends Component {
   
  render() {
    return (
      <div>
        <header className='App-header'>EMPLOYEE FEEDBACK FORM</header>
        <div className='container'>
        {this.props.value.map((item,index)=>{
            return(
                <div className='box' key={index} >Name : {item.name} | Department : {item.department} | Rating : {item.rating}</div>
            )
        })}
        </div>
        <button className='btn2' onClick={this.props.tf}>Go Back</button>
      </div>
    )
  }
}
