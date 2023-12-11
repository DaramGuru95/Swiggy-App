import { useState } from "react";
import RestaurantCard from "./ReastaurantCard";
// import oneDataCard from "./Data/OneDataCard";
import resList from "../Utils/mockdata";

const Body = () => {
  const [listOfRestaurants, setListData] = useState(resList);

  // const url =
  //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.919579172818151&lng=77.61575337717859&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          {/* <input
            className="body-input"
            type="text"
            value={searcText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          /> */}
          <button
            className="body-input-search"
            onClick={() => {
              // setSearchText(event.target.value);
              const filteredRestaurant = listOfRestaurants.filter(
                (res) => res.data.avgRating > 4
              );
              // console.log(listOfRestaurant);
              setListData(filteredRestaurant);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {/* Do not use Index as key, React is not recommend to use index, we can always use key is unique ID as KEY. */}

        {/* When you want to show multiple items in array, we can use map method. And why, means we have to loop all the items */}

        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.data.id} />
        ))}

        {/* If we are using the below type means it will take lot time, And when the API was changed we cannot find the exact element
        EX: If the backend people were added a new item in the API Data, this type of code sceneario, it will take lot time to show the
        Item so, always we can use map, filter and reduce methods  */}
      </div>
    </div>
  );
};

export default Body;
