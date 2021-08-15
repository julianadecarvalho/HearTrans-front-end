import React, { useContext } from "react";
import { SearchResultCard } from "./SearchResultCard";
import styles from "./SearchResultsList.module.css";
import { SearchContext } from "./SearchContext";

// interface IProps {
//   results: Info[];
// }
// this is the api data sent back
//const searchResults = useContext(SearchContext);
function* generator() {
  var i = 1;

  while (true) {
    yield i;
    i ++;
  }
}

export const SearchResultsList: React.FC = () => {
  const { searchResults } = useContext(SearchContext);

  const renderList = (): JSX.Element[] => {
    var gen = generator();
    return searchResults.map((result) => {
      const count = gen.next().value;
      return (
        <li className="searchResultsList">
          <SearchResultCard
            result={result}


            // {...result}
            // fullName={result.fullName}
            // avgReview={result.avgReview}
            // specialty={result.specialty}
            // id={result.id}
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

//   return (
//     <article className={styles["search-results-list"]}>
//       <ul className={styles["search-results-list"]}></ul>
//     </article>
//   );
// };

export default SearchResultsList;
