import React from "react";
import PropTypes from "prop-types";
import "../styles/CategorySidebar.css";

const CategorySidebar = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className="category-sidebar">
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={selectedCategory === category || (!selectedCategory && category === "All Product") ? "active" : ""}
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

CategorySidebar.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string,
  onCategorySelect: PropTypes.func.isRequired,
};

export default CategorySidebar;
