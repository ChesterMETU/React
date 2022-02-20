import { combineReducers } from "redux";

const locationLatLotReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_LOCATION":
      return { lat: action.payload[0].lat, lon: action.payload[0].lon };
    default:
      return state;
  }
};

const wheatherInfoReducer = (state = [], action) => {
  switch (action.type) {
    case "WHEATHER_INFO":
      if (
        state.some((item) => {
          return item.name === action.payload.name;
        })
      ) {
        return state;
      }
      return [...state, action.payload];
    case "REMOVE_LOCATION":
      return state
        .map((item) => {
          if (item.name === action.payload) {
            return null;
          }
          return item;
        })
        .filter((item) => {
          return item !== null;
        });
    case "REMOVE_ALL":
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  locationLatLot: locationLatLotReducer,
  wheatherInfos: wheatherInfoReducer,
});
