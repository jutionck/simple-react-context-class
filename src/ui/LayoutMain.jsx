import React, {Component} from 'react';
import Sidebar from "../components/Sidebar";
import Profile from "../pages/Profile";

class LayoutMain extends Component {
  render() {
    return (
      <main>
        <Sidebar />
        <Profile />
      </main>
    );
  }
}

export default LayoutMain;

/**
 * Saat ini LayoutMain tidak perlu lagi menggunakan props ya sebagai jembatan data yang akan dikirim kan ke component child
 * Component child -> Component Child.
 */