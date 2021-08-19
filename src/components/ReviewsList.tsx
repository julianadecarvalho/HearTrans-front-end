import ReviewResponse from "../models/review-response";
import { AvgRating } from "./AvgRating";
import styles from "../pages/PaddingForForms.module.css";
import { FaStar } from "react-icons/fa";

export interface IProps {
  reviews: ReviewResponse[];
}
export const ReviewsList = ({ reviews }: IProps) => {
  const renderList = (): JSX.Element[] => {
    return reviews.map((review) => {
      const warnings: undefined | string[] = review.contentWarnings;
      return (
        <li key={review.id} className="card">
          <div className={`card-content ${styles["review-padding"]}`}>
            <div className="content">
              {warnings ? (
                <div>
                  <h4>CONTENT WARNINGS:</h4>
                  <div className="tags is-grouped-multiline">
                    {review.contentWarnings.map((contentWarning) => {
                      return (
                        <span className="tag is-medium is-rounded is-danger">
                          {contentWarning}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ""
              )}
              {/* <div className="tags is-grouped-multiline">
                {review.contentWarnings.map((contentWarning) => {
                  return (
                    <span className="tag is-medium is-rounded is-danger">
                      {contentWarning}
                    </span>
                  );
                })}
              </div> */}
              <div className="field">
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label>
                      <FaStar
                        size={30}
                        color={
                          ratingValue <= review.rating ? "#ffc107" : "#e4e5e9"
                        }
                      />
                    </label>
                  );
                })}
              </div>
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
