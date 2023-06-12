import React, { Component } from 'react';
import App2 from './App2';
import "./App.css"

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : "",
      department : "",
      rating : "",
      toggle : true,
      data : []
    }
  }

  handleClick=()=>{
    const arr={
      name:this.state.name,
      department:this.state.department,
      rating:this.state.rating
    }
    this.state.data.push(arr)
    this.setState({data:this.state.data,name:"",department:"",rating:""})
    console.log(this.state.data);
    this.toggle()
  }

  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }

  toggle=()=>{this.setState({toggle:!this.state.toggle})}


  render() {
    return (
      <div className='App'>
        {
          this.state.toggle ?
          <div>
            <header className='App-header'>EMPLOYEE FEEDBACK FORM</header>
            <label className='lable'>Name : </label>
            <input className='Input-field' type="text" name="name" placeholder="Enter your name" value={this.state.name} onChange={this.handleChange} /> <br />
            <label className='lable'>Department : </label>
            <input className='Input-field' type="text" name='department' value={this.state.department} onChange={this.handleChange} />
            <br />
            <label className='lable'>Rating : </label>
            <input className='Input-field' type="number" name='rating' value={this.state.rating} onChange={this.handleChange} /> 
            <br />
            <button className='btn' onClick={this.handleClick}>Submit</button>
          </div>
          :
          <App2 value={this.state.data} tf={this.toggle} />
        }

      </div>
    )
  }
}

