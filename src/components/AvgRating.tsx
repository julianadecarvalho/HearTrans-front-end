import React from "react";
import { FaStar } from "react-icons/fa";
export interface IProps {
  rating: number | string;
  len: number | string;
}
export const AvgRating: React.FC<IProps> = ({ rating, len }: IProps) => {
  return (
    <div className="field">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <FaStar
              size={30}
              color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
            />
          </label>
        );
      })}
      <span>{len} Reviews</span>
    </div>
  );
};
