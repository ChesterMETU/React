import React from "react";
import "./App.css";
import Header from "./Header";
import Search from "./Search";
import WheatherInfo from "./WheatherInfo";

const App = () => {
  return (
    <div>
      <Header />
      <div className="wapper">
        <Search />
        <div className="wheather-container">
          <WheatherInfo />
        </div>
      </div>
    </div>
  );
};

export default App;
