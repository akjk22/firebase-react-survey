// import React from "react";
import Header from "./Header";
import SurveyControl from "./SurveyControl";
import Counter from "./Counter";
import React, { Component } from 'react';
import firebase from './../firebase.js';
import Login from './Login';
// import SurveyList from './SurveyList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return ( 
      <React.Fragment>
        <Header />
        <SurveyControl />
        <Counter />
        <div>
          {this.state.user ? (<App />) : (<Login />)}
        </div>
      </React.Fragment>
    );
  }
}
// function App(){



  // return ( 
  //   <React.Fragment>
  //     <Header />
  //     <SurveyControl />
  //     <Counter />
  //   </React.Fragment>
  // );
// }

export default App;