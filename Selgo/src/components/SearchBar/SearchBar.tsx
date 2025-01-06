import React from "react";
import "./styles.css";
import Button from "../Button";

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search",
  onSearch,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <>
      <div className="search-container">
        <div className="search-bar">
          <img src="/src/assets/images/Banner/search-01.png" alt="search" />
          <input
            type="text"
            placeholder={placeholder}
            onChange={handleInputChange}
          />
        </div>
        <Button variant="icon-btn" name="Map"width={102} height={48}/>
      </div>
    </>
  );
};

export default SearchBar;
