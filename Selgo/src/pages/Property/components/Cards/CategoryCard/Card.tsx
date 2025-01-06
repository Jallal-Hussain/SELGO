import { NavLink } from "react-router-dom";
import { Categories } from "../../../data/CategoryData";
import "./styles.css";
const CategoryCard = () => {
  return (
    <>
      <div className="category-container">
        {Categories.map((category, index) => (
          <NavLink to={`${category.url}`} key={index} className="category">
            <img src={category.icon} alt={category.name} />
            <p>{category.name}</p>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default CategoryCard;
