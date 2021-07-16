import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class PreComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Nitish Singh Chauhan'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Nitish Singh Chauhan'
      })
    }, 2000)
  }
  
  render() {
    return (
      <div>
        Pre Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />

      </div>
    )
  }
}

export default PreComp
