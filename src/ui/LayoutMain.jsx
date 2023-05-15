import React, {Component} from 'react';
import Sidebar from "../components/Sidebar";
import ProfileView from "../pages/profile/ProfileView";
import LoginView from "../pages/login/LoginView";

class LayoutMain extends Component {
  render() {
    return (
      <main>
        <Sidebar />
        <LoginView/>
        <ProfileView />
      </main>
    );
  }
}

export default LayoutMain;

/**
 * Saat ini LayoutMain tidak perlu lagi menggunakan props ya sebagai jembatan data yang akan dikirim kan ke component child
 * Component child -> Component Child.
 */