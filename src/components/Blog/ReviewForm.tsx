'use client'

// ReviewForm.js
import React, { useState } from "react";
import axios from "axios";

const ReviewForm = () => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (rating === 0) {
      setError("Please select a star rating");
      return;
    }

    const userId = "user123"; // Replace with actual user ID
    const blogId = 123; // Replace with the current blog's ID

    try {
      await axios.post("/api/reviews", {
        content: reviewText,
        rating,
        userId,
        blogId,
      });

      // Reset form fields and error message
      setRating(0);
      setReviewText("");
      setError("");
    } catch (error) {
      console.error("Error submitting review:", error);
      setError("Unable to submit review. Please try again later.");
    }
  };

  return (
    <div>
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review..."
      />
      <div>
        {/* Star rating UI component */}
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="0">Select a rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
      <button onClick={handleSubmit}>Submit Review</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ReviewForm;
