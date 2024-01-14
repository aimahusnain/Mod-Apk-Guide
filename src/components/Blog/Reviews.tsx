'use client'

import { useEffect, useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import axios from 'axios';
import React from 'react'

const Reviews = ({p}) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Fetch reviews for the current blog post
        const fetchReviews = async () => {
          try {
            const response = await axios.get(`/api/reviews?blogId=${p.blogId}`);
            setReviews(response.data);
          } catch (error) {
            console.error('Error fetching reviews:', error);
          }
        };
    
        fetchReviews();
      }, [p.blogId]);
    
  return (
    <div>
      <ReviewForm blogId={p.blogId} />
      <ReviewList reviews={reviews} />
    </div>
  )
}

export default Reviews