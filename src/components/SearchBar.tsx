import React, { useState } from "react";
import "../styles/SearchBar.scss";
//@ts-ignore
import SearchIcon from "../assets/Icon.png";

const SearchBar: React.FC<{ input: string; setInput: any }> = (props) => {
  return (
    <div className="search-bar-container">
      <input
        className="search-bar"
        value={props.input}
        type="search"
        placeholder="Search Customer"
        onChange={(event) => {
          props.setInput(event.target.value);
        }}
      />
      <img src={SearchIcon} />
    </div>
  );
};

export default SearchBar;
