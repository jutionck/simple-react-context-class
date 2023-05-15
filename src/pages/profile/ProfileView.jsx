import React, {Component} from 'react';
import {DataContext} from "../../context/DataContext";

class ProfileView extends Component {
  static contextType = DataContext

  render() {
    const { profile } = this.context;
    const name = profile && profile.name ? profile.name : 'Default name';
    console.log('name:', name)
    return (
      <article>
        <h2>Profile</h2>
        <p>Name: { name }</p>
      </article>
    );
  }
}

export default ProfileView;