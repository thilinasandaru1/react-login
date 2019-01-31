import MuiThemneProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleClick(event) {
    var apiBaseUrl = "http://localhost:4000/api/";
    var self = this;
    var playload = {
      email: this.state.username,
      password: this.state.password
    };

    Axios.post(apiBaseUrl + "login", playload)
      .then(function(response) {
        console.log(response);

        if (response.data.code == 200) {
          console.log("Login Successfull");
          var uploadScreeen = [];
          uploadScreeen.push(
            <uploadScreeen appContext={self.props.appContext} />
          );
          self.props.appContext.setState({
            loginPage: [],
            uploadScreeen: uploadScreeen
          });
        } else if (response.data.code == 204) {
          console.log("Username password do not mactch");
          alert("Username password do not match");
        } else {
          console.log("Username does nto exists");
          alert("Username does not exist");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <MuiThemneProvider>
          <div>
            <AppBar title="Login" />
            <TextField
              hintText="Enter your Username"
              floatingLabelText="username"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
            />
            <br />
            <TextField
              type="password"
              hindText="Enter your Password"
              floatingLableText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              label="submit"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </MuiThemneProvider>
      </div>
    );
  }
}

const style = {
  margin: 15
};

export default Login;
