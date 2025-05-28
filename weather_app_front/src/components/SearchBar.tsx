import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import {
  searchBarContainerClass,
  inputClass,
  searchButtonClass,
} from "../styles/tailwindStyles";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  buttonText?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = "",
  buttonText = "Search",
}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query.trim());
    }
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className={searchBarContainerClass}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={inputClass}
      />
      <Button type="submit" className={searchButtonClass}>
        {buttonText}
      </Button>
    </form>
  );
};

export default SearchBar;
