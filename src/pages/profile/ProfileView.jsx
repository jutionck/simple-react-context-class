import React, {Component} from 'react';
import {DataContext} from "../../context/DataContext";

class ProfileView extends Component {
  static contextType = DataContext

  render() {
    const { profile } = this.context;
    return (
      <article>
        <h2>Profile</h2>
        <p>Name: { profile ? profile.name : 'Default name'}</p>
      </article>
    );
  }
}

export default ProfileView;