import React from "react";
import SalesCard from "./Sales";
import "./styles.css";
import ProfileCard from "./Profile";
import ShopCard from "./Shop";
import Card from "../Cards";

const PopularAds: React.FC = () => {
  return (
    <div className="popular-ads">
      <h2>Popular Ads</h2>
      <div className="popular-cards">
        <ProfileCard />
        <SalesCard />
        <ShopCard />
      </div>
      <Card />
    </div>
  );
};

export default PopularAds;
