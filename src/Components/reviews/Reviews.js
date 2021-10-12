import React, { useState, useEffect } from "react";
import { fetchMoviesRevievs } from "../../services/movies-api.js";

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMoviesRevievs(id).then((reviews) => {
      setReviews([...reviews]);
      // console.log(reviews);
    });
  }, []);

  return (
    <>
      <h2>Reviews</h2>

      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
        <h2>No reviews</h2>
      </ul>
    </>
  );
};

export default Reviews;
