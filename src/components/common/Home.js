import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-5 bg-dark">
      <Link to="/addVehicle">
        <button className="btn btn-success p-3 m-3">ADD NEW VEHICLES </button>
      </Link>
      <Link to="/viewAllVehicles">
        <button className="btn btn-info p-3 m-3">VIEW ALL VEHICLES</button>
      </Link>
    </div>
  );
}
