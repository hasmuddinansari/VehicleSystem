export const addVehicle = vehicle => {
  return {
    type: "ADD_VEHICLE",
    payload: vehicle
  };
};

export const sorting = (data, typeSort) => {
  return {
    type: "SORT",
    typeSort: typeSort,
    data: data
  };
};

export const deleteVehicle = id => {
  return {
    type: "DELETE",
    id: id
  };
};

export const updateVehicle = (newVehicle, id) => {
  return {
    type: "UPDATE",
    id: id,
    newVehicle: newVehicle
  };
};
