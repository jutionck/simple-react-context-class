import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Hello, {this.props.name}!</h1>
      </header>
    );
  }
}

export default Header;