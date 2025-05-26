import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import {
  searchBarContainerClass,
  inputClass,
  searchButtonClass,
} from "../styles/tailwindStyles";

const SearchBar: React.FC<{ onSearch?: (query: string) => void }> = ({
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query.trim());
    }
    setQuery(""); // Clear the input after search
  };

  return (
    <form onSubmit={handleSubmit} className={searchBarContainerClass}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a city..."
        className={inputClass}
      />
      <Button type="submit" className={searchButtonClass}>
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
