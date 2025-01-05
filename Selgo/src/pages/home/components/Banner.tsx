import React from "react";
import Button from "../../../components/Button";
import { categories } from "./data/CategoryData";
import { BannerImagesData } from "./data/BannerImages";

const Banner: React.FC = () => {
  return ( 
    <div className="banner">
      <div className="banner-search">
        <img
          src="/src/assets/images/Banner/search-01.png"
          alt=""
          className="search-icon"
        />
        <input type="text" className="search-bar" placeholder="Search" />
        <Button
          padding={10}
          name="Search"
          color="white"
          backgroundColor="#007272"
          borderRadius={10}
          width={120}
          height={58}
          fontSize={16}
        />
      </div>
      <div className="banner-title">
        <h1>
          Simplify your shopping with us – Finnish quality at your fingertips.
        </h1>
        <p>Uncover Inspiration, Get Motivated, and live a better life.</p>
      </div>
      <div className="banner-images">
        {BannerImagesData.map((image, index) => (
          <img
            key={index}
            src={image.img}
            alt="banner img"
            className="banner-image"
          />
        ))}
      </div>
      <div className="banner-categories">
        {categories.map((category, index) => (
          <div className="category" key={index}>
            <img src={category.icon} alt="icon" className="icon" />
            <span className="name">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
