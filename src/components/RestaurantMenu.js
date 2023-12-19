import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResData] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8956915&lng=77.6354679&restaurantId=17036&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    // console.log(json);
    setResData(json.data);
    console.log(json.data);
  };

  const { name, cuisines, costForTwoMessage } =
    resInfo.cards[0]?.card?.card?.info;

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{costForTwoMessage}</h2>
      <ul>
        <li>Biryanai</li>
        <li>Coffee</li>
        <li>Burgers</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
