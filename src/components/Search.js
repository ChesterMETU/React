import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { wheatherInfo } from "../actions";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { removeAll } from "../actions";
import axios from "axios";

const Search = ({ wheatherInfo, removeAll, wheatherInfos }) => {
  const [search, setSearch] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [menu, setMenu] = useState(false);

  const myRef = useRef(null);

  useEffect(() => {
    const handleClicklOutside = (e) => {
      if (myRef.current && !myRef.current.contains(e.target)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClicklOutside);

    return () => {
      document.removeEventListener("mousedown", handleClicklOutside);
    };
  }, [myRef]);
  const handleSubmit = (e) => {
    e.preventDefault();

    wheatherInfo(e.target[0].value);
  };

  const handleChange = async (e) => {
    setMenu(true);
    if (e.target.value === "") {
      setSearch([]);
      setInputValue("");
    } else {
      setInputValue(e.target.value);
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${e.target.value}&limit=5&appid=7e0e865aef775543f59c10c93c996626`
      );

      setSearch(
        response.data.map((item) => {
          return item.name;
        })
      );
    }
  };

  const handleClick = () => {
    removeAll();
  };

  const handleClickSearch = (e) => {
    setInputValue(e.target.innerText);
    setMenu(false);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <label>Location:</label>
        <div className="searchtext-wrapper">
          <input value={inputValue} type="text" onChange={handleChange}></input>
          {search.length !== 0 && menu && (
            <div ref={myRef} className="searchresult-container">
              {search.map((item, index) => {
                return (
                  <div
                    className="searchitem"
                    onClick={handleClickSearch}
                    key={index}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="button-container">
          <button>ENTER</button>
        </div>
        <div onClick={handleClick} className="remove-all">
          <PlaylistRemoveIcon />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { wheatherInfos: state.wheatherInfos };
};

export default connect(mapStateToProps, {
  wheatherInfo,
  removeAll,
})(Search);
