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
              <div className="tags is-grouped-multiline">
                {/* how to only show content warnings label when there are content warnings */}
                <p>{review.contentWarnings === [] ? "" : "CONTENT WARNINGS"}</p>
                {review.contentWarnings.map((contentWarning) => {
                  return (
                    <span className="tag is-small is-rounded is-danger">
                      {contentWarning}
                    </span>
                  );
                })}
              </div>
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
