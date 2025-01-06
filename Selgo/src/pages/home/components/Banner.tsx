import React from "react";
import { categories } from "./data/CategoryData";
// import { BannerImagesData } from "./data/BannerImages";
// import HeroSection from "./Hero";
import SearchBar from "../../../components/SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import Category from "../../../components/Category/Category";
import BannerImage from "../../../components/banner/Banner";
// import BannerSection from './Banner/index'


const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="banner-title">
        <h1>
          Simplify your shopping with us – Finnish quality at your fingertips.
        </h1>
        <p>Uncover Inspiration, Get Motivated, and live a better life.</p>
      </div>
      <BannerImage />
      {/* <BannerSection /> */}
      {/* <HeroSection/> */}
      <div className="categories">
        {categories.map((category, index) => (
          <NavLink to={`${category.path}`}>
            <Category key={index} title={category.name} icon={category.icon} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Banner;
