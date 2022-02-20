import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { connect } from "react-redux";
import { removeLocation } from "../actions";

const WheatherCard = ({ info, icon, removeLocation }) => {
  const handleRemove = () => {
    removeLocation(info.name);
  };
  return (
    <div>
      <div className="wheathercard-container">
        <div className="title-wrapper">
          <label>{info.name}</label>
        </div>
        <img src={icon} alt="icon"></img>
        <div className="wheatherınfo-container">
          <div>Sıcaklık: {info.main.temp} °C</div>
          <div>Hisedilen: {info.main.feels_like} °C</div>
          <div>En düşük: {info.main.temp_min} °C</div>
          <div>En yüksek: {info.main.temp_max} °C</div>
        </div>
        <div onClick={handleRemove} className="wheatherinfoicon-container">
          <RemoveCircleOutlineIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  removeLocation,
})(WheatherCard);
