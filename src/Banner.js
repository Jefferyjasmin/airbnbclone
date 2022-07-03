import { Button } from "@material-ui/core";
import { useState } from "react";
import React from "react";
import "./Banner.css";
import Search from "./Search";

import { useHistory } from "react-router-dom";
import { clicked } from "./features/button.Slice";
import { useDispatch } from "react-redux";
const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);

  const dispatch = useDispatch();
  let history = useHistory();
  const clickedButton = (e) => {
    setShowSearch(!showSearch);
    dispatch(clicked());
  };
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button
          onClick={clickedButton}
          className="banner_SearchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you
        </h5>

        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
};

export default Banner;
