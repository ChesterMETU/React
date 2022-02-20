import axios from "axios";

export const wheatherInfo = (city) => async (dispatch, getState) => {
  await dispatch(fetchLocationInfo(city));
  await dispatch(
    getWeatherInfo(getState().locationLatLot.lat, getState().locationLatLot.lon)
  );
};

export const getWeatherInfo = (lat, lon) => async (dispatch) => {
  const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7e0e865aef775543f59c10c93c996626&units=metric`
  );

  dispatch({ type: "WHEATHER_INFO", payload: response.data });
};

export const fetchLocationInfo = (city) => async (dispatch) => {
  const response = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=7e0e865aef775543f59c10c93c996626`
  );

  dispatch({ type: "FETCH_LOCATION", payload: response.data });
};

export const removeAll = () => {
  return { type: "REMOVE_ALL" };
};

export const removeLocation = (name) => {
  return { type: "REMOVE_LOCATION", payload: name };
};
