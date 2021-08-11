import React from "react";
import { AvgRating } from "../AvgRating";
import styles from "./SearchResultCard.module.css";

interface IProps {
  name: string;
  avgReview: string;
  specialty: string;
  id: number;
}

export const SearchResultCard: React.FC<IProps> = ({
  name,
  avgReview,
  specialty,
  id,
}) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <div className={styles["search-result"]}>
            <section className={styles["business-info"]}>
              <h2 className="subtitle">{name}</h2>
              {/* <AvgRating /> */}
              {/* will need to pass down the avg review variable as prop into AvgRating component? */}
              <p>{avgReview}</p>
              <span className="tag">{specialty}</span>{" "}
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
