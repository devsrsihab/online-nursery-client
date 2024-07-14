import React from "react";

type RatingProps = {
  rating: number;
  maxRating?: number;
  onRate?: (rate: number) => void;
};

const CustomRating: React.FC<RatingProps> = ({ rating, maxRating = 5, onRate }) => {
  const handleClick = (rate: number) => {
    if (onRate) {
      onRate(rate);
    }
  };

  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, index) => {
        const rateValue = index + 1;
        const isFilled = rateValue <= rating;

        return (
          <svg
            key={index}
            onClick={() => handleClick(rateValue)}
            className={`icon cursor-pointer ${isFilled ? "filled" : ""}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={isFilled ? "orange" : "none"}
            stroke={isFilled ? "orange" : "gray"}
            strokeWidth="2"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
          </svg>
        );
      })}
    </div>
  );
};

export default CustomRating;
