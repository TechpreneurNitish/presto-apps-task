import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    return <h1>Welcome {this.props.name} your position in company {this.props.heroName}</h1>
  }
}

export default Welcome;