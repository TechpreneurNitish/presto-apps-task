import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    const {name, heroName} = this.props
    // const {state1, state2} = this.state
    return <h1>Welcome {name} your position in company {heroName}</h1>
  }
}

export default Welcome;