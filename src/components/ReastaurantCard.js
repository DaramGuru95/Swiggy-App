import React, { useEffect, useState } from "react";

const RestaurantCard = (props) => {
  let mockData = [10, 30, 14, 25, 24, 13];
  const { resData, sla } = props;

  const fetchData = () => {
    console.log("Hey Daram");
  };

  const [data, setData] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const url = fetch(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.1192944&lng=77.6120835&restaurantId=120226&catalog_qa=undefined&submitAction=ENTER"
  );

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.data.cloudinaryImageId
        }
      />
      <div className="restarant-text">
        <h3>{resData.data.name}</h3>
        <h4>
          {resData.data.avgRating}.{resData.data.sla.deliveryTime} minutes
        </h4>
        <h4>{resData.data.costForTwo}</h4>
        <h4>{resData.data.cuisines.join(", ")}</h4>
        <h4>{resData.data.locality}</h4>
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
    </div>
  );
};

export default RestaurantCard;
