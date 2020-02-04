import React, { useState } from "react";

const SearchForm = () => {

  const [query, setQuery] = useState("");

  //   handle changes
  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    // filter through array and return filtered array
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" placeholder="City, State, or Name of Business" onChange={handleChange} value={query} required/>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
