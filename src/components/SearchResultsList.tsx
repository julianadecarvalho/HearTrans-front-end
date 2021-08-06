import React from "react";
import { SearchResultCard } from "./SearchResultCard";
import styles from "./SearchResultsList.module.css";
import { Info } from "../pages/SearchResults";

interface IProps {
  results: Info[];
}

export const SearchResultsList: React.FC<IProps> = ({ results }) => {
  const renderList = (): JSX.Element[] => {
    return results.map((result) => {
      return (
        <li className="searchResultsList">
          <SearchResultCard
            name={result.name}
            avgReview={result.avgReview}
            specialty={result.specialty}
            id={result.id}
          />
        </li>
      );
    });
  };

  return (
    <article className={styles["search-results-list"]}>
      <ul className={styles["search-results-list"]}>{renderList()}</ul>
    </article>
  );
};

export default SearchResultsList;
