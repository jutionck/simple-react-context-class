import React, {Component} from 'react';
import {DataContext} from "../context/DataContext";

class Profile extends Component {
  static contextType = DataContext

  render() {
    const { name, age } = this.context;
    return (
      <article>
        <h2>Profile</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </article>
    );
  }
}

export default Profile;