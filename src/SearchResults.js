import StarIcon from "@material-ui/icons/Star";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React from "react";
import "./SearchResults.css";
const SearchResults = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="searchResults">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResults_heart" />
      <div className="searchResults_info">
        <div className="searchResults_infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>_____________________</p>
          <p>{description}</p>
        </div>
        <div className="searchResults_infoBottom">
          <div className="searchResult_stars">
            <StarIcon className="searchResults_star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResults_price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
