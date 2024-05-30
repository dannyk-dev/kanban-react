import React, { ChangeEvent } from "react";
import InputField from "./Input";

interface SearchProps {
  searchText: string;
  setSearchText: (searchText: string) => void;
}

const Search = ({ searchText, setSearchText }: SearchProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <InputField label="Search" onChange={handleChange} value={searchText} />
  );
};

export default Search;
