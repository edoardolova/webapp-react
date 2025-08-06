import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ReviewContext } from "../context/ReviewContext";
import { MovieContext } from "../context/MovieContext";
import MovieDetail from "../components/MovieDetail";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";

export default function MovieDetailPage() {
  const { slug } = useParams();
  const { getReviewsByMovieSlug, addReview } = useContext(ReviewContext);
  const { getMovieBySlug, selectedMovie} = useContext(MovieContext); 

  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [vote, setVote] = useState(1);

  useEffect(() => {
    getMovieBySlug(slug);
    getReviewsByMovieSlug(slug)
    .then(setReviews);
  }, [slug]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      movie_id: selectedMovie.id,
      name,
      text,
      vote,
    };

    addReview(slug, newReview)
    .then((savedReview) => {
      setReviews((prev) => [...prev, savedReview]);
      setShowModal(false);
      setName("");
      setText("");
      setVote(1);
    });
  };

  return (
    <div className="container py-5">
      <div className="row">{selectedMovie && <MovieDetail movie={selectedMovie} />}</div>

      <div className="mt-5">
        <div className="d-flex mb-4 align-items-center">
          <h3 className="m-0 fs-2">Reviews</h3>
          <button className="btn ms-auto border-0 btn-add-review" onClick={() => setShowModal(true)} >
            <i className="bi bi-plus-circle text-primary fs-3"></i>
          </button>
        </div>
        <ReviewList reviews={reviews} />
      </div>

      <ReviewForm
        showModal={showModal}
        setShowModal={setShowModal}
        name={name}
        setName={setName}
        text={text}
        setText={setText}
        vote={vote}
        setVote={setVote}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
