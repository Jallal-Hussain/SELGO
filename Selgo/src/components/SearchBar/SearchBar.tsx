import React from "react";
import "./styles.css";
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
        <button>
          <img
            src="/src/assets/images/Banner/maps-location-01.png"
            alt="search"
          />
          <p>Map</p>
        </button>
      </div>
    </>
  );
};

export default SearchBar;
