import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/TextField";
import Axios from "axios";

import Login from "./Login";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
  }

  handleClick(event) {
    var apiBaseUrl = "http://localhost:4000/api/";

    console.log(
      "values",
      this.state.first_name,
      this.state.last_name,
      this.state.email,
      this.state.password
    );

    var selft = this;

    var playload = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };

    Axios.post(apiBaseUrl + "register", playload)
      .then(function(response) {
        console.log(response);

        if (response.data.code == 200) {
          console.log("Registration Successfull");
          var loginscreen = [];
          loginscreen.push(<Login parentContext={this} />);
          var loginmessage = "Not registered yet. Go to registration";
          self.props.parentContext.setState({
            loginscreen: loginscreen,
            loginmessage: loginmessage,
            buttonLabel: "Register",
            isLogin: true
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Register" />
            <TextField
              hintText="Enter your First Name"
              floatingLabelText="First Name"
              onChange={(event, newValue) =>
                this.setState({ first_name: newValue })
              }
            />
            <br />
            <Textfield
              hintText="Enter your Last Name"
              floatingLabelText="Last Name"
              onChange={(event, newValue) =>
                this.setState({ last_name: newValue })
              }
            />
            <br />
            <TextField
              hintText="Enter your Email"
              type="email"
              floatingLabelText="Email"
              onChange={(event, nweValue) => this.setState({ email: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your password"
              floatingLableText="password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15
};

export default Register;
