import React from "react";
import "./styles.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { categories } from "./components/data/CategoryData";
import { NavLink } from "react-router-dom";
import Category from "../../components/Category/Category";
import cardData from "./components/data/Card";
import Card from "../../components/Card/Card";

const Target: React.FC = () => {
  return (
    <>
      <h3>The Square</h3>
      <div className="target-container">
        <div className="search-bar">
          <SearchBar />
        </div>
        <div className="categories">
          {categories.map((category, index) => (
            <NavLink to={`${category.path}`}>
              <Category
                key={index}
                title={category.name}
                icon={category.icon}
              />
            </NavLink>
          ))}
        </div>
        <Card data={cardData} />
      </div>
    </>
  );
};

export default Target;
