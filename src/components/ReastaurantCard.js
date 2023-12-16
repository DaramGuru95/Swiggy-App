import React, { useEffect, useState } from "react";
import { CDN_URL } from "../Utils/constants";
// import ReduxTest from "./ReduxTest";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, locality } =
    resData?.data;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.1192944&lng=77.6120835&restaurantId=120226&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
  };
  // const url = fetch(
  //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.1192944&lng=77.6120835&restaurantId=120226&catalog_qa=undefined&submitAction=ENTER"
  // );

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="restarant-text">
        <h3>{name}</h3>
        <h4>
          {avgRating}.{resData.data.sla.deliveryTime} minutes
        </h4>
        <h4>{costForTwo}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{locality}</h4>
        {/* <button
          onClick={() => {
            const filterData = mockData.filter((res) => {
              res > 10;
            });
          }}
        >
          Click me
        </button> */}
      </div>

      {/* <ReduxTest /> */}
    </div>
  );
};

export default RestaurantCard;
