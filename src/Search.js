import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PeopleIcon from "@material-ui/icons/People";
import { DateRangePicker } from "react-date-range";
import "./Search.css";
import { clicked } from "./features/button.Slice";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  const buttonClicked = () => {
    dispatch(clicked());
    history.push("/search");
  };
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={buttonClicked}>Search Airbnb</Button>
    </div>
  );
};

export default Search;
