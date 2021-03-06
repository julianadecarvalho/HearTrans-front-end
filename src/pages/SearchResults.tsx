import React, { useContext } from "react";
import { SearchResultCard } from "../components/SearchResultCard";
import styles from "./SearchResults.module.css";
import { SearchContext } from "../components/SearchContext";
import SimpleMap from "../components/Map";

// interface IProps {
//   results: Info[];
// }
// this is the api data sent back
//const searchResults = useContext(SearchContext);
function* generator() {
  var i = 1;

  while (true) {
    yield i;
    i++;
  }
}

export function SearchResults(props: any) {
  const { searchResults } = useContext(SearchContext);

  const renderList = (): JSX.Element[] => {
    var gen = generator();
    return searchResults.map((result) => {
      const count = gen.next().value;
      console.log(count);
      return (
        <li key={result.id} className="searchResultsList">
          <SearchResultCard result={result} count={count} />
        </li>
      );
    });
  };

  return (
    <div className="columns">
      {/* add search summary results component */}
      <div className="column is-two-fifths is-offset-1">
        <article className={styles["search-results-list"]}>
          <ul className={styles["search-results-list"]}>{renderList()}</ul>
        </article>
      </div>
      <div className="column is-flexible">
        <SimpleMap center={props.center} />
      </div>
    </div>
  );
}
