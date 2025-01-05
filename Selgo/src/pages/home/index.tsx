import React from "react";
import Banner from "./components/Banner";
// import Button from "../../components/Button";
import "./styles.css";
import PopularAds from "./components/PopularAds";

const index: React.FC = () => {
  return (
    <>
      <Banner />
      <PopularAds/>
    </>
  );
};

export default index;
