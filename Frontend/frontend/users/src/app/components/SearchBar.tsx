import React, { useState, FC } from "react";
import SearchIcon from "../assets/search.svg";

interface OnSearchProps {
  onSearch: (searchQuery: string) => Promise<any>;
}

const SearchBar: FC<OnSearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="input-group">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onSearch(searchQuery);
          }
        }}
      />
      <img
        src={SearchIcon}
        alt="search"
        onClick={() => onSearch(searchQuery)}
      />
    </div>
  );
};

export default SearchBar;
