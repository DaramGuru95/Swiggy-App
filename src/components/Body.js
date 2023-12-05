import RestaurantCard from "./ReastaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisines="Biryani, North Indian, Asian"
        />
        <RestaurantCard resName="KFC" cuisines="Burger, Fast Food" />
      </div>
    </div>
  );
};

export default Body;
