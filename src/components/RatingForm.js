import { useState } from "react";
import starEmpty from "../assets/images/icons8-star-empty.png";
import starFilled from "../assets/images/icons8-star-fill.png";

export const RatingForm = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingClick = (value) => {
    if (!isSubmitted) {
      setRating(value);
    }
  };

  const handleStarHover = (value) => {
    if (!isSubmitted) {
      setHoverRating(value);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    alert(`You have rated: ${rating}`);
  };

  return (
    <div className="ratePortfolio">
      <h3 className="componentTitle">Rate my portfolio:</h3>

      {[1, 2, 3, 4, 5].map((value) => (
        <img
          src={
            value <= (hoverRating || rating) ? `${starFilled}` : `${starEmpty}`
          }
          alt="star"
          key={value}
          className={
            value <= (hoverRating || rating) ? "starFilled" : "starEmpty"
          }
          onClick={() => handleRatingClick(value)}
          onMouseEnter={() => handleStarHover(value)}
          onMouseLeave={() => handleStarHover(0)}
        />
      ))}
      {!isSubmitted && (
        <button onClick={handleSubmit} className="btn-orange btnRatingForm">
          Rate Now
        </button>
      )}
    </div>
  );
};
