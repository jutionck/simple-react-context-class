import React, {Component} from 'react';
import {DataContext} from "../context/DataContext";

class Profile extends Component {
  render() {
    return (
      <DataContext.Consumer>
        {(data) => (
          <article>
            <h2>Profile</h2>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
          </article>
        )}
      </DataContext.Consumer>
    );
  }
}

export default Profile;