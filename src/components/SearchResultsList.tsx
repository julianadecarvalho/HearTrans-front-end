import React, { useContext } from "react";
import { SearchResultCard } from "./SearchResultCard";
import styles from "./SearchResultsList.module.css";
import { Info } from "../pages/SearchResults";
import { SearchContextProvider } from "./SearchContext";

interface IProps {
  results: Info[];
}
// this is the api data sent back
//const searchResults = useContext(SearchContext);

//  commented out to replace back later
// export const SearchResultsList: React.FC<IProps> = ({ searchResults }) => {
//   const renderList = (): JSX.Element[] => {
//     return searchResults.map((result) => {
//       return (
//         <li className="searchResultsList">
//           <SearchResultCard
//             // {...result}
//             name={result.name}
//             avgReview={result.avgReview}
//             specialty={result.specialty}
//             id={result.id}
//           />
//         </li>
//       );
//     });
//   };

//   return (
//     <article className={styles["search-results-list"]}>
//       <ul className={styles["search-results-list"]}>{renderList()}</ul>
//     </article>
//   );
// };

export const SearchResultsList = () => {
  return (
    <article className={styles["search-results-list"]}>
      <ul className={styles["search-results-list"]}></ul>
    </article>
  );
};

export default SearchResultsList;
