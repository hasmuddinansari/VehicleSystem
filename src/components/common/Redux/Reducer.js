const initialState = {
  data: []
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_VEHICLE":
      return {
        data: [...state.data, action.payload]
      };
    case "DELETE":
      const newData = state.data.filter(veh => {
        return veh.id != action.id;
      });
      return {
        data: newData
      };

    case "SORT": {
      if (action.typeSort == "asc") {
        let data = action.data;
        let sortedData = data.sort((a, b) => {
          if (a.model_name.toLowerCase() > b.model_name.toLowerCase()) return 1;
          else if (a.model_name.toLowerCase() < b.model_name.toLowerCase())
            return -1;
          return 0;
        });
        return {
          data: sortedData
        };
      } else if (action.typeSort == "desc") {
        let data = action.data;
        let sortedData = data.sort((a, b) => {
          if (a.model_name.toLowerCase() < b.model_name.toLowerCase()) return 1;
          else if (a.model_name.toLowerCase() > b.model_name.toLowerCase())
            return -1;
          return 0;
        });
        return {
          data: sortedData
        };
      }
    }

    case "UPDATE":
      const newUpdatedData = state.data.filter(oldVehicle => {
        return oldVehicle.id != action.id;
      });
      return {
        data: [...newUpdatedData, action.newVehicle]
      };

    default:
      return state;
  }
};

export default Reducer;
