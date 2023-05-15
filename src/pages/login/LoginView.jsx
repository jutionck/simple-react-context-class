import React, {Component} from 'react';
import {DataContext} from "../../context/DataContext";
import {ServiceContext} from "../../context/ServiceContext";
import Cards from "../../components/Cards";

class LoginView extends Component {
  // penggunaan contextType hanya menangani untuk 1 context, solusi menggunakan Consumer0
  // static contextType = DataContext

  state = {
    inputValue: ''
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  onLogin = async (dataCtx, serviceCtx) => {
    console.log(dataCtx);
    console.log(serviceCtx);
    try {
      // serviceCtx.services.loginService -> didapat dari pengiriman pada provider (App.js)
      const response = await serviceCtx.services.loginService.login(this.state.inputValue);
      dataCtx.setProfile({name: response});
    } catch (e) {
    }
  }

  render() {
    // const {setProfile} = this.context;
    const {inputValue} = this.state;
    return (
      <>
        <ServiceContext.Consumer>
          {(deps) => (
            <DataContext.Consumer>
              {(value) => (
                <Cards>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="staticEmail2"
                        placeholder="username"
                        value={inputValue} onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                      <input type="password" className="form-control" id="inputPassword2" placeholder="Password" disabled/>
                    </div>
                    <div className="col-md-4">
                      <button className={"btn btn-primary mb-3"} onClick={() => this.onLogin(value, deps)}>Login</button>
                    </div>
                  </div>
                </Cards>
              )}
            </DataContext.Consumer>
          )}
        </ServiceContext.Consumer>
      </>
    );
  }
}

export default LoginView;