import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-60 flex items-center px-4 bg-[#f2dcfc] rounded-md shadow-sm border border-[#6816a3] focus-within:border-[#6b16a3] transition-all duration-200 hover:cursor-pointer">
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-sm bg-transparent py-3 text-[#373b1e] placeholder:text-[#94A3B8] outline-none"
        value={value}
        onChange={onChange}
      />

      {value && (
        <IoMdClose
          className="text-lg text-[#B45309] hover:text-[#6116a3] cursor-pointer transition-colors duration-200"
          onClick={onClearSearch}
        />
      )}

      <FaMagnifyingGlass
        className="ml-2 text-[#6616a3] hover:text-[#B45309] cursor-pointer transition-colors duration-200"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;