import React from "react";
import { connect } from "react-redux";
import WheatherCard from "./WheatherCard";

const WheatherInfo = ({ wheatherInfos }) => {
  const renderWheaterInfo = () => {
    return wheatherInfos.map((item, index) => {
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${item.weather[0].icon}.svg`;
      return <WheatherCard key={index} info={item} icon={icon} />;
    });
  };
  return (
    <div>
      <div className="wheathercard-wrapper">{renderWheaterInfo()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { wheatherInfos: state.wheatherInfos };
};

export default connect(mapStateToProps)(WheatherInfo);
