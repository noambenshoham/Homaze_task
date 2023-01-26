import React, { useState } from "react";
import "../styles/SearchBar.css";
//@ts-ignore
import SearchIcon from "../assets/Icon.png";

const SearchBar: React.FC = () => {
  const [input, setInput] = useState("");

  return (
    <div className="containerr">
      <input
        className="search-bar"
        value={input}
        type="search"
        placeholder="Search Customer"
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <img src={SearchIcon} />
    </div>
  );
};

export default SearchBar;
