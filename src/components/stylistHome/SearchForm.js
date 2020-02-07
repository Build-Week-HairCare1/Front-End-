import React, { useState } from "react";

const SearchForm = props => {
  const { setNewLocation } = props;
  const [query, setQuery] = useState("");

  //   handle changes
  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    // filter through array and return filtered array
    e.preventDefault();
    setNewLocation(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        className="search-input"
        type="text"
        name="query"
        placeholder="City, State"
        onChange={handleChange}
        value={query}
        required
      />
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
