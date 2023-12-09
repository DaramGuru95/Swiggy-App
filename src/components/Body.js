import { useState } from "react";
import RestaurantCard from "./ReastaurantCard";
import oneDataCard from "./Data/OneDataCard";

const Body = () => {
  const [searcText, setSearchText] = useState("");

  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.919579172818151&lng=77.61575337717859&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="body-input"
            type="text"
            value={searcText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="body-input-search"
            onClick={(event) => {
              setSearchText(event.target.value);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {/* <RestaurantCard
          resName="Meghana Foods"
          cuisines="Biryani, North Indian, Asian"
        /> */}
        <RestaurantCard resData={oneDataCard} />
        {/* <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};

export default Body;
