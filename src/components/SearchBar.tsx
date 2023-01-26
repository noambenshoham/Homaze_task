import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar: React.FC = () => {
  const [input, setInput] = useState("");

  return (
    <div className="container">
      <form>
        <input
          type="search"
          placeholder="Search Customer"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
