import React, {Component} from 'react';
import Sidebar from "../components/Sidebar";
import ProfileView from "../pages/profile/ProfileView";
import LoginView from "../pages/login/LoginView";
import CombineContextProvider from "../context/CombineContextProvider";

class LayoutMain extends Component {
  render() {
    return (
      <main>
        <Sidebar />
        <CombineContextProvider>
          <LoginView/>
        </CombineContextProvider>
        <ProfileView />
      </main>
    );
  }
}

export default LayoutMain;

/**
 * Saat ini LayoutMain tidak perlu lagi menggunakan props ya sebagai jembatan data yang akan dikirim kan ke component child
 * Component child -> Component Child.
 *
 * Ada tambahan CombineProvider, yang saat ini diterapkan pada LoginView
 */