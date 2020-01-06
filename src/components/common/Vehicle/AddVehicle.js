import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { addVehicle } from "../Redux/Action";
import { connect } from "react-redux";

var idGenerate = 6;
const style = {
  textDecoration: "none",
  marginLeft: "10px"
};

class AddVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      model_name: "",
      vehicle_type: "",
      mileage: "",
      top_speed: "",
      cost: "",
      sales: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  //importing addvehicle function from props
  //function submit for add vehicles
  submit = e => {
    const {
      model_name,
      vehicle_type,
      mileage,
      top_speed,
      cost,
      sales
    } = this.state;
    e.preventDefault();

    if (
      cost.length == 0 ||
      sales.length == 0 ||
      model_name.length == 0 ||
      vehicle_type.length == 0 ||
      mileage.length == 0 ||
      top_speed.length == 0
    ) {
      alert("All Field are mendotory to fill.");
    } else {
      this.props.addVehicle({ ...this.state, id: idGenerate++ });
      alert("Vehicle Added");
      this.reseting();
    }
  };

  reseting = () => {
    this.setState({
      model_name: "",
      vehicle_type: "",
      mileage: "",
      top_speed: "",
      cost: "",
      sales: ""
    });
  };

  render() {
    const {
      model_name,
      vehicle_type,
      mileage,
      top_speed,
      cost,
      sales
    } = this.state;
    // add vehicle form
    return (
      <div className="container row px-5 py-2">
        <form className="flex-column col-md-5 col-12 bg-light  border p-2 d-flex">
          <h2 className="text-center text-danger">Add New Vehicle</h2>
          <TextField
            className=" m-2"
            id="outlined-basic"
            onChange={this.handleChange}
            name="model_name"
            label="Model Name"
            variant="outlined"
            value={model_name}
          />
          <TextField
            id="outlined-basic"
            className="m-2"
            onChange={this.handleChange}
            name="vehicle_type"
            label="Vehicle Type"
            placeholder="SUV, Hatchback etc"
            variant="outlined"
            value={vehicle_type}
          />
          <TextField
            id="outlined-basic"
            className=" m-2"
            onChange={this.handleChange}
            name="mileage"
            label="Mileage"
            variant="outlined"
            value={mileage}
          />
          <TextField
            id="outlined-basic"
            className=" m-2"
            onChange={this.handleChange}
            name="top_speed"
            label="Top Speed"
            variant="outlined"
            value={top_speed}
          />
          <TextField
            id="outlined-basic"
            className=" m-2"
            onChange={this.handleChange}
            name="cost"
            label="Cost"
            variant="outlined"
            value={cost}
          />
          <TextField
            id="outlined-basic"
            className=" m-2"
            onChange={this.handleChange}
            name="sales"
            label="Sales"
            placeholder="sales in units for FY19-20"
            variant="outlined"
            value={sales}
          />
          <Button
            onClick={this.submit}
            variant="outlined"
            className="py-2  m-2 bg-dark text-white"
            color="primary"
          >
            Add Vehicle
          </Button>
        </form>
        {/* navigation */}
        <div className="col-md-5 col-12">
          <Link style={style} to="/viewAllVehicles">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXjAf_Hx8VyHRDjzMlWD8xieB6tfJHIBA7GgkpEjcCbaDXg7LcA&s" />
            <h5>View All Vehicles</h5>
          </Link>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddVehicle);
