import React, { Component } from "react";
import { connect } from "react-redux";
import { updateVehicle } from "../Redux/Action";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Update extends Component {
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
  componentDidMount() {
    const vehicles = this.props.data.find(
      vehicle => vehicle.id == this.props.match.params.id
    );
    this.setState({
      id: vehicles.id,
      model_name: vehicles.model_name,
      vehicle_type: vehicles.vehicle_type,
      mileage: vehicles.mileage,
      top_speed: vehicles.top_speed,
      cost: vehicles.cost,
      sales: vehicles.sales
    });
  }
  //importing addvehicle function from props
  //function submit for add vehicles
  submit = e => {
    const {
      model_name,
      vehicle_type,
      mileage,
      top_speed,
      cost,
      sales,
      id
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
      this.props.updateVehicle(this.state, id);
      alert("Vehicle Updated");
    }
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
      <div className="container row px-5 py-2 flex-column d-flex align-items-center justify-content-center">
        <form className="flex-column col-md-5 col-12 bg-light  border p-2 d-flex">
          <h2 className="text-center text-danger">Update Vehicle </h2>
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
            Update Vehicle
          </Button>
        </form>
        <div>
          <Link className="btn btn-info mx-3" to="/viewAllVehicles">
            All Vehicles
          </Link>
          <Link className="btn btn-success mx-3" to="/addVehicle">
            Add New Vehicle
          </Link>
          <Link className="btn btn-danger mx-3" to="/">
            Dashboard
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
    updateVehicle: (newVehicle, id) => dispatch(updateVehicle(newVehicle, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Update);
