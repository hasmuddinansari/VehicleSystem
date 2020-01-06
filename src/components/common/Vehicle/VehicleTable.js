import React from "react";
import { Link } from "react-router-dom";

export default function VehicleTable({
  data,
  handleSort,
  deleteVehicle,
  totalSales,
  match
}) {
  console.log(match);
  return (
    <div className="table-responsive">
      <table className="p-5 bg-light table  ">
        <thead className="bg-dark text-white">
          <tr className="bg-white text-dark">
            <td>
              <Link className="btn btn-outline-info" to="/addVehicle">
                Add more Vehicle
              </Link>
            </td>
            <td>
              <p className="btn btn-dark text-white">
                Total Vehicles : {data.length}
              </p>
            </td>
            <td>
              <Link className="btn btn-outline-success" to="/">
                Go to Dashboard
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                Model Name <button onClick={handleSort}>Sort</button>
              </span>
            </td>
            <td>Sales</td>
            <td>Delete</td>
            <td>More...</td>
          </tr>
        </thead>
        <tbody>
          {data.map(vehicle => {
            return (
              <tr key={vehicle.id}>
                <td>{vehicle.model_name}</td>
                <td>{vehicle.sales}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteVehicle(vehicle.id);
                    }}
                    className="bg-danger px-2 text-white"
                  >
                    X
                  </button>
                </td>
                <td>
                  <Link
                    className="btn btn-info"
                    to={`${match.url}/${vehicle.id}`}
                  >
                    More..
                  </Link>
                </td>
              </tr>
            );
          })}
          <tr className="bg-dark text-white">
            <td>
              <h4>Total Sales</h4>
            </td>
            <td>
              <h4>{totalSales}</h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
