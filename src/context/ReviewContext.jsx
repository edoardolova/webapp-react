import { createContext, useState, useEffect, useContext } from "react";
import { LoaderContext } from "./LoaderContext";

export const ReviewContext = createContext();

export function ReviewProvider({ children }) {
    const [reviews, setReviews] = useState([]);
    const { showLoader, hideLoader } = useContext(LoaderContext);

    useEffect(() => {
         showLoader();
        fetch("http://localhost:3000/reviews")
        .then((res) => res.json())
        .then((data) => {
            setReviews(data);
        })
        .finally(() => hideLoader());
    }, []);

    const getReviewsByMovieSlug = (slug) => {
         showLoader();
        return fetch(`http://localhost:3000/movies/${slug}`)
        .then((res) => res.json())
        .then((data) => data.reviews)
        .finally(() => hideLoader());
    };

    const addReview = (slug, reviewData) => {
         showLoader();
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
        })
        .finally(() => hideLoader());
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
