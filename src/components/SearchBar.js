import React from "react";

function SearchBar({ onFilter, onSort }) {
  const handleFilter = (e) => {
    onFilter(e.target.value);
  };

  const handleSort = (e) => {
    onSort(e.target.value);
  };

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          onChange={handleSort}
        />
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" name="sort" onChange={handleSort} />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;