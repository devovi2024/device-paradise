import React from "react";
import PropTypes from "prop-types";
import "../styles/CategorySidebar.css";

const CategorySidebar = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <aside className="category-sidebar">
      <h3 className="sidebar-title">Categories</h3>
      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category}
            className={`category-item ${
              selectedCategory === category ? "selected" : ""
            }`}
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

CategorySidebar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string,
  onCategorySelect: PropTypes.func.isRequired,
};

export default CategorySidebar;
