import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";

import "./App.css";
import LoginScreen from "./Loginscreen";

injectTapEventPlugin();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    };
  }

  componentWillMount() {
    var LoginPage = [];
    loginPage.push(<Loginscreen parentContext={this} />);
    this.setState({
      loginPage: loginPage
    });
  }

  render() {
    return (
      <div>
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

const style = {
  margin: 15
};

export default App;
