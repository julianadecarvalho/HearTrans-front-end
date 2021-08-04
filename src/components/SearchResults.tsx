import React from "react";
import { NavBar } from "./NavBar";
import { SearchResultsList } from "./SearchResultsList";

export function SearchResults() {
  return (
    <div>
      <NavBar />
      {/* add search summary results */}
      {/* cards component list */}
      <SearchResultsList />
      {/* map component */}
    </div>
  );
}
