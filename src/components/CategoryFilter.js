import React from "react";

function CategoryFilter({ currentCategory, setCategory, categories }) {
  
  const myButtons = categories.map(category => {
    const className = (category === currentCategory ? "selected" : null)
    return (
    <button
    className={className} 
    key={category} 
    onClick={() => setCategory(category)}
    > 
      {category}
    </button>
  )})

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {myButtons}
    </div>
  );
}

export default CategoryFilter;
