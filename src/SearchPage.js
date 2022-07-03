import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResults from "./SearchResults";
const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays - 26 august to 30 august | 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters....</Button>
      </div>
      <SearchResults
        star={5}
        title={"Stay at this spacious Jasmin House"}
        description="1 guest - 1 bedroom - 1bed - 1.5 shared bthrooms- wifi - kitchen - free parking - Washing Machine"
        price={"$250/Night"}
        total={"$750"}
        location="Private room"
        img="http://cdn.home-designing.com/wp-content/uploads/2018/10/dark-wall-master-bedroom-luxury-decorating-ideas-with-pendant-lights.jpg"
      />
      <SearchResults
        star={5}
        title={"Stay at this spacious Jasmin House"}
        description="1 guest - 1 bedroom - 1bed - 1.5 shared bthrooms- wifi - kitchen - free parking - Washing Machine"
        price={"$250/Night"}
        total={"$750"}
        location="Private room"
        img="http://cdn.home-designing.com/wp-content/uploads/2018/10/dark-wall-master-bedroom-luxury-decorating-ideas-with-pendant-lights.jpg"
      />
    </div>
  );
};

export default SearchPage;
