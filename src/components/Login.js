import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './../firebase';

class Login extends Component {
  constructor(props) {
    super(props);

  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }

  render() {
    return (
      <div className="col-md-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email Address</label>
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
            class="form-control" id="exampleInputEmail1" area-desribedby="emailHelp" placeholder="Enter Email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else</small> 
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input value={this.state.password} onChange={this.handleChange} type="password" name="password"
            class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
          <button onClick={this.signup} style={{marginLeft: '25px' }}class="btn btn-success">Signup</button>
        </form>
      </div>
    )
  }
}

export default Login;