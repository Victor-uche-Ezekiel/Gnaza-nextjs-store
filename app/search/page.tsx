import React from "react";

type Props = {};

function SearchBox({}: Props) {
  return (
    <form className="border-none w-[min(100%,_50rem)] flex justify-between">
      <input
        type="search"
        placeholder="search Products, brands and categories"
      />
      <button type="button">search</button>
    </form>
  );
}

export default SearchBox;
