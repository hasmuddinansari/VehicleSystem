import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Auth from "./Auth";
import { FakeData } from "../common/Vehicle/FakeVehicleData";
import { addVehicle } from "../common/Redux/Action";
import { connect } from "react-redux";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      adminUsername: "admin",
      adminPassword: "admin"
    };
  }
  componentDidMount() {
    console.log(FakeData());
    const fakedata = FakeData();
    fakedata.forEach(vehicle => {
      this.props.addVehicle(vehicle);
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = () => {
    console.log(this.state);
    const { username, password, adminUsername, adminPassword } = this.state;
    // authentication if user is valid or not
    if (username === adminUsername && password === adminPassword) {
      Auth.login(() => {
        this.props.history.push("/");
      });
      alert("Login Successfull");
    } else {
      alert("Invalid username or password");
    }
  };
  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center p-5">
        <form className="flex-column col-md-5 col-12 bg-light  border p-2 d-flex">
          <h2 className="text-center text-danger">Login</h2>
          <TextField
            className="m-2"
            id="outlined-basic"
            onChange={this.handleChange}
            name="username"
            placeholder="admin"
            label="Username"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            className="m-2"
            onChange={this.handleChange}
            name="password"
            placeholder="admin"
            label="Password"
            variant="outlined"
          />

          <Button
            onClick={this.submit}
            variant="outlined"
            className="py-2  m-2 bg-dark text-white"
            color="primary"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addVehicle: vehicle => dispatch(addVehicle(vehicle))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
