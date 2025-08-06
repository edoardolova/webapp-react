import { createContext, useState, useEffect } from "react";

export const ReviewContext = createContext();

export function ReviewProvider({ children }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  const getReviewsByMovieSlug = (slug) => {
    return fetch(`http://localhost:3000/movies/${slug}`)
      .then((res) => res.json())
      .then((data) => data.reviews);
  };

  const addReview = (slug, reviewData) => {
    return fetch(`http://localhost:3000/reviews/${slug}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((newReview) => {
        setReviews((prev) => [...prev, newReview]);
        return newReview;
      });
  };

  return (
    <ReviewContext.Provider
      value={{
        reviews,
        setReviews,
        getReviewsByMovieSlug,
        addReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
}
