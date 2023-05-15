import React, {Component} from 'react';
import Cards from "../../components/Cards";
import {CombineContext} from "../../context/CombineContext";

class LoginView extends Component {
  // melakukan combine context untuk memecah consumer di bawah
  static contextType = CombineContext;

  state = {
    inputValue: ''
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  onLogin = async () => {
    // di dapat dari combine context
    const {serviceCtx, dataCtx} = this.context;
    try {
      const response = await serviceCtx.services.loginService.login(this.state.inputValue);
      dataCtx.setProfile({name: response});
    } catch (e) {
    }
  }

  render() {
    const {inputValue} = this.state;
    return (
      <>
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
              <button className={"btn btn-primary mb-3"} onClick={() => this.onLogin()}>Login</button>
            </div>
          </div>
        </Cards>
      </>
    );
  }
}

export default LoginView;