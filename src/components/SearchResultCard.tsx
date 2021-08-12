import React from "react";
import { AvgRating } from "./AvgRating";
import { Info } from "./SearchContext";
import styles from "./SearchResultCard.module.css";
import { Link } from "react-router-dom";

interface IProps {
  result: Info;
}

export const SearchResultCard: React.FC<IProps> = ({ result }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <div className={styles["search-result"]}>
            <section className={styles["business-info"]}>
              <Link to={`/provider/${result.id}`}>
                <h2 className="subtitle">{result.fullName}</h2>
              </Link>
              {/* <AvgRating /> */}
              {/* will need to pass down the avg review variable as prop into AvgRating component? */}
              <p>{result.avgReview}</p>
              <span className="tag">{result.specialties}</span>{" "}
            </section>
            {/* might delete the phone, address section */}
            <section>
              <p> phone: +13456437</p>
              <p> Example Street </p>
              <p> 1234 Atlanta</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
