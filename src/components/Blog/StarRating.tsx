'use client'

import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

interface MyRatingState {
  rating: number;
  averageRating: number;
  totalReviews: number;
}

class MyRatingComponent extends Component<{}, MyRatingState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      rating: 0, // Set your initial rating here
      averageRating: 0,
      totalReviews: 0,
    };
  }

  componentDidMount() {
    // Fetch the average rating data when the component mounts
    this.fetchAverageRating();
  }

  fetchAverageRating() {
    // Replace this with your API call to fetch the average rating data
    // For example, you can use the Fetch API or Axios here
    // You should retrieve the averageRating and totalReviews values
    // and set them in the component's state

    // For now, let's simulate the data fetching process
    setTimeout(() => {
      const averageRating = 4.5; // Replace with your fetched data
      const totalReviews = 100; // Replace with your fetched data
      this.setState({ averageRating, totalReviews });
    }, 1000);
  }

  changeRating = (newRating: number) => {
    this.setState({
      rating: newRating,
    });
  };

  render() {
    return (
      <div>
        <h1>My Rating Component</h1>
        <StarRatings
          rating={this.state.rating}
          starRatedColor="blue"
          changeRating={this.changeRating}
          numberOfStars={5} // Set the number of stars to display
          name="rating" // A unique identifier for this component
        />
        <p>Current Rating: {this.state.rating}</p>
        <p>
          Average Rating: {this.state.averageRating.toFixed(1)} ({this.state.totalReviews} reviews)
        </p>
        
      </div>
    );
  }
}

export default MyRatingComponent;
