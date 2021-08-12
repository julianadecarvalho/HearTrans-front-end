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
    <Link to={`/provider/${result.id}`}>
      <div className="card">
        <div className="card-content">
          <div className="content">
            <div className={styles["search-result"]}>
              <section className={styles["business-info"]}>
                <h2 className="subtitle">{result.fullName}</h2>

                {/* <AvgRating /> */}
                {/* will need to pass down the avg review variable as prop into AvgRating component? */}
                <p>{result.avgReview}</p>
                <div className="tags is-grouped-multiline">
                  {result.specialties.map((speciality) => {
                    return <span className="tag">{speciality}</span>;
                  })}
                </div>
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
    </Link>
  );
};
