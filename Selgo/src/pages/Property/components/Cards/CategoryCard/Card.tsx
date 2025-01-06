import Category from "../../../../../components/Category/Category";
import { Categories } from "../../../data/CategoryData";
import "./styles.css"
const CategoryCard = () => {
  return (
    <>
      <div className="category-container">
        {Categories.map((category, index) => (
          <Category key={index} title={category.title} icon={category.icon} />
        ))}
      </div>
    </>
  );
};

export default CategoryCard;
