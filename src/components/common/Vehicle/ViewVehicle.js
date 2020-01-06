import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

var style = {
  textDecoration: "none",
  color: "white"
};

//individual vehicle

function ViewVehicle({ match, data }) {
  const vehicle = data.find(vehicle => {
    return match.params.id == vehicle.id;
  });
  var condition = false;
  if (vehicle !== undefined) {
    condition = true;
  }
  return (
    <div className="d-flex justify-content-center align-items-center ">
      {condition ? (
        <div className=" border  col-lg-6 col-md-8 col-12 p-5 my-3 bg-white">
          <ul className="list-group">
            <h3 className="bg-dark text-white">
              Model Name : {vehicle.model_name}
            </h3>
            <li className="list-group-item">
              Vehicle Type : {vehicle.vehicle_type}
            </li>
            <li className="list-group-item">Mileage : {vehicle.mileage}</li>
            <li className="list-group-item">
              Top Speed : {vehicle.top_speed} Km/h
            </li>
            <li className="list-group-item">Cost : {vehicle.cost} Rs.</li>
            <li className="list-group-item">Sales : {vehicle.sales} Rs.</li>
          </ul>
          <button className="btn btn-dark my-2">
            <Link style={style} to="/ViewAllVehicles">
              Go Back !!
            </Link>
          </button>
          <button className="btn btn-success my-2 ml-5">
            <Link style={style} to={`${match.url}/update`}>
              Update !!
            </Link>
          </button>
        </div>
      ) : (
        <h2 className="text-center">Vehicle Not Found !!</h2>
      )}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(ViewVehicle);
