import React, { Component } from 'react'

class Msg extends Component {
  constructor() {
    super()
      this.state = {
        msg: 'Welcome Laundo'
      }
  }

  changeMsg(){
    this.setState({
      msg: 'Thank you laundo for subscribing'
    })
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={() => this.changeMsg()}>Subscribe</button>
      </div>
    )
  }
}

export default Msg;