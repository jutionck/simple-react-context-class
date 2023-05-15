import React, {Component} from 'react';
import Sidebar from "../components/Sidebar";
import Profile from "../pages/Profile";

class LayoutMain extends Component {
  render() {
    return (
      <main>
        <Sidebar />
        <Profile name={this.props.name} age={this.props.age} />
      </main>
    );
  }
}

export default LayoutMain;