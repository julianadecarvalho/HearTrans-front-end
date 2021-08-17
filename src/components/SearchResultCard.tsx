import React from "react";
import { AvgRating } from "./AvgRating";
import styles from "./SearchResultCard.module.css";
import { Link } from "react-router-dom";
import ProviderResponse from "../models/provider-response";

interface IProps {
  result: ProviderResponse;
  count: number | void;
}

export const SearchResultCard: React.FC<IProps> = ({ result, count }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <div className={styles["search-result"]}>
            <section className={styles["business-info"]}>
              <h2 className="subtitle">
                <Link to={`/provider/${result.id}`}>
                  {count}. {result.fullName}, {result.titles.join(", ")}
                </Link>
              </h2>
              <AvgRating
                rating={result.avgRating}
                len={result.reviews.length}
              />
              <div className="tags is-grouped-multiline">
                {result.specialties.map((speciality) => {
                  return (
                    <span
                      className={`tag is-rounded ${styles["speciality-tag"]}`}
                    >
                      {speciality}
                    </span>
                  );
                })}
              </div>
              <p>
                Locations:
                <br></br>
                {result.locations.map((location) => {
                  return (
                    <Link to={`/location/${location.id}`}>
                      {location.locationName}
                    </Link>
                  );
                })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
