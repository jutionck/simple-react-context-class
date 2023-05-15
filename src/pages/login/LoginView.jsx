import React, {Component} from 'react';
import {DataContext} from "../../context/DataContext";

class LoginView extends Component {
  static contextType = DataContext
  render() {
    const {setProfile} = this.context;
    return (
      <>
        <button className={"btn btn-primary"} onClick={() => setProfile({name: 'Joko'})}>Login</button>
      </>
    );
  }
}

export default LoginView;

/**
 * Coba berikan challenge nama yang dikirim dari inputan text
 */