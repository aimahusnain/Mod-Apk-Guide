'use client'

import { useEffect, useState } from "react";
import axios from "axios";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("/api/reviews").then((response) => {
      setReviews(response.data);
    });
  }, []);

  const renderReviews = () => {
    return reviews.map((review) => (
      <div key={review.id}>
        <p>{review.content}</p>
        <p>Rating: {review.rating}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        renderReviews()
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default ReviewList;
