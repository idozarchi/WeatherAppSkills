import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

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
    <form
      onSubmit={handleSubmit}
      className="flex items-center space-x-2 w-full max-w-lg mt-8"
    >
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a city..."
        className="w-full"
      />
      <Button type="submit" className="w-32">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
