import React from "react";

const CategoryList = ({
  categories,
  setSelectedCategoryId,
  selectedCategoryId,
}) => {
  return (
    <>
      {categories.map((cat) => (
        <button
          key={cat.id}
          data-testid={`category-${cat.id}`}
          className={`category-btn ${
            cat.id === selectedCategoryId ? "active" : ""
          }`}
          onClick={() => setSelectedCategoryId(cat.id)}
        >
          📁 {cat.name} ({cat.notes.length})
        </button>
      ))}
    </>
  );
};

export default CategoryList;
