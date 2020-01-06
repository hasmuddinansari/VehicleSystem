import React, { Component } from "react";
import { connect } from "react-redux";
import { addVehicle, deleteVehicle, sorting } from "../Redux/Action";
import { Link } from "react-router-dom";
import VehicleTable from "./VehicleTable";

class ViewAllVehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asc: false
    };
  }

  handleSort = () => {
    this.setState({
      asc: !this.state.asc
    });
    const { data, sorting } = this.props;
    if (this.state.asc) {
      sorting(data, "asc");
    } else {
      sorting(data, "desc");
    }
  };

  render() {
    const { data, deleteVehicle, match } = this.props;
    console.log(data);
    var totalSales = 0;
    data.forEach(ele => {
      totalSales += parseInt(ele.sales);
    });
    console.log(totalSales);

    if (data.length == 0) {
      return (
        <h1 className="p-5 bg-danger text-white">
          SORRY !! Vehicle database is empty !!!!!
          <Link to="/addVehicle">Go Back</Link>
        </h1>
      );
    } else {
      return (
        <VehicleTable
          data={data}
          deleteVehicle={deleteVehicle}
          handleSort={this.handleSort}
          totalSales={totalSales}
          match={match}
          {...this.props}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addVehicle: vehicle => dispatch(addVehicle(vehicle)),
    deleteVehicle: id => dispatch(deleteVehicle(id)),
    sorting: (data, typeSort) => dispatch(sorting(data, typeSort))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllVehicles);
