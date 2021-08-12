import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
export interface IProps {
  rating: number;
}
export const AvgRating: React.FC<IProps> = ({ rating }: IProps) => {
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
    </div>
  );
};
