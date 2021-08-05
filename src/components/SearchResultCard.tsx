import React from "react";
import { AvgRating } from "./AvgRating";
import styles from "./SearchResultCard.module.css";

export function SearchResultCard() {
  return (
    <div className={styles["search-result"]}>
      <section className={styles["business-info"]}>
        <h2 className="subtitle">Location</h2>
        <AvgRating />
        <span className="tag">Some filter tag</span>{" "}
        <span className="tag">Some filter tag</span>
      </section>
      <section>
        <p> phone: +13456437</p>
        <p> Example Street </p>
        <p> 1234 Atlanta</p>
      </section>
    </div>
  );
}
