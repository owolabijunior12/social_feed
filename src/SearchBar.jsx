import React from "react";

function SearchBar() {
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="w-full border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
        placeholder="Search..."
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
        <svg
          className="h-5 w-5 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22 22l-6-6"></path>
          <path d="M16 10a6 6 0 1 0-12 0 6 6 0 0 0 12 0z"></path>
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
