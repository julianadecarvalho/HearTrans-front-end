import ReviewResponse from "../models/review-response";
import { AvgRating } from "./AvgRating";
export interface IProps {
  reviews: ReviewResponse[];
}
export const ReviewsList = ({ reviews }: IProps) => {
  const renderList = (): JSX.Element[] => {
    return reviews.map((review) => {
      return (
        <li key={review.id} className="card">
          <div className="card-content">
            <div className="content">
              <div className="tags is-grouped-multiline">
                <p>{review.contentWarnings.length ? "CONTENT WARNINGS" : ""}</p>
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
