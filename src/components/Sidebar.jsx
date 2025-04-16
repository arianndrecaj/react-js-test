import { useState } from "react";

export default function Sidebar({
  categories,
  setCategories,
  setSelectedCategory,
}) {
  const handleCreateCategory = () => {
    const name = prompt("Enter category name");
    if (name) {
      setCategories([...categories, { id: Date.now(), name, notes: [] }]);
    }
  };

  return (
    <div className="w-1/4 bg-white border-r overflow-y-auto p-2">
      <button
        className="bg-green-400 hover:bg-green-500 text-white w-full py-2 rounded mb-2"
        onClick={handleCreateCategory}
      >
        Create Category +
      </button>
      {categories.map((cat, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory(index)}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 my-1 rounded text-left"
        >
          📁 {cat.name} ({cat.notes.length})
        </button>
      ))}
    </div>
  );
}
