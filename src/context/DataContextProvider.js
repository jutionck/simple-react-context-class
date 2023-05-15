import React, {Component} from 'react';
import {DataContext} from "./DataContext";

class DataContextProvider extends Component {
  state = {
    profile: {}
  }

  setProfile = (profile) => {
    this.setState({
      profile: profile
    })
  }

  render() {
    const { profile } = this.state
    return (
      <DataContext.Provider value={{
        profile: profile,
        setProfile: this.setProfile
      }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;