
import React from "react";
import "./styles.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import LinksComponent from "./components/Links/Links";
import CategoryCard from "./components/Cards/CategoryCard/Card";
import DetailsCard from "./components/Cards/DetailsCard/Card";
import RecomendedCard from "./components/Cards/RecomendedCards/Card";


const Property: React.FC = () => {
  return (
    <>
      <div className="property-container">
        <div className="property-header">
          <div className="header-image">
            <h1>Has winters already moved in?</h1>
            <p>
              Don't think about it, at FINN we have 71,842 places you can stay
            </p>
            <SearchBar />
          </div>
          <LinksComponent />
        </div>
        <div className="property-body">
          <div className="body-content">
            <CategoryCard />
            <DetailsCard />
            <RecomendedCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
