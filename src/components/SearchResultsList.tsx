import React from "react";
import { SearchResultCard } from "./SearchResultCard";
import styles from "./SearchResultsList.module.css";

export function SearchResultsList() {
  return (
    <div className={styles["search-results-list"]}>
      <SearchResultCard />
      <SearchResultCard />
    </div>
  );
}
