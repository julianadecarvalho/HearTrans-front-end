import React from "react";
import { NavBar } from "../components/NavBar";
import { SearchResultsList } from "../components/SearchResultsList";
import SimpleMap from "../components/Map";

export function SearchResults() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <NavBar />
      {/* add search summary results component */}
      {/* cards component list */}
      <SearchResultsList />
      <SimpleMap/>
    </div>
  );
}
