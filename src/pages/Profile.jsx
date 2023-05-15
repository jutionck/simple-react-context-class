import React, {Component} from 'react';

class Profile extends Component {
  render() {
    return (
      <article>
        <h2>Profile</h2>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
      </article>
    );
  }
}

export default Profile;