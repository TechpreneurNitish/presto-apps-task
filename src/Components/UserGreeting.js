import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (this.state.isLoggedIn && <div>Welcome Nitish Singh Chauhan</div>) || (
      <div>Welcome Guest</div>
    );
    // let msg
    // if (this.state.isLoggedIn) {
    //   msg = <div>Welcome Nitish Singh Chauhan</div>
    // } else {
    //   msg = <div>Welcome Guest</div>
    // }

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Nitish Singh Chauhan</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Nitish Singh Chauhan</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
  }
}

export default UserGreeting;
