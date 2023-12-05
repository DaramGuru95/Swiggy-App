import React, { useEffect, useState } from "react";

const RestaurantCard = (props) => {
  let mockData = [10, 30, 14, 25, 24, 13];

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
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisines}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
      <button
        onClick={() => {
          const filterData = mockData.filter((res) => {
            res > 10;
          });
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default RestaurantCard;
