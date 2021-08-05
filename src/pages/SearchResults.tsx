import React from "react";
import { NavBar } from "../components/NavBar";
import { SearchResultsList } from "../components/SearchResultsList";

export function SearchResults() {
  return (
    <div>
      <NavBar />
      {/* add search summary results component */}
      {/* cards component list */}
      <SearchResultsList />
      {/* map component */}
    </div>
  );
}
