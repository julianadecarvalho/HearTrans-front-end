import React from "react";
import ReviewResponse from "../models/review-response";
import { AvgRating } from "./AvgRating";
export interface IProps {
  reviews: ReviewResponse[];
}
export const ReviewsList = ({ reviews }: IProps) => {
  const renderList = (): JSX.Element[] => {
    return reviews.map((review) => {
      return (
        <li className="card">
          <div className="card-content">
            <div className="content">
              <AvgRating rating={review.rating} len={""} />
              {review.reviewBody}
            </div>
          </div>
        </li>
      );
    });
  };

  return (
    <article>
      <ul>{renderList()}</ul>
    </article>
  );
};
