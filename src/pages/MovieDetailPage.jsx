import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetailPage() {
    const { slug } = useParams();
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/movies/${slug}`)
            .then(res => res.json())
            .then(data => {
                setMovie(data);
                setReviews(data.reviews);
            });
    }, [slug]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('it-IT'); 
    };

    return (
        <div className="container py-5">
            <div className="row">
                {movie && (
                    <>
                        <div className="col-md-5 mb-4">
                            <img src={movie.image} alt={movie.title} className="img-fluid rounded shadow-lg" style={{ maxHeight: '500px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-md-7">
                            <h1 className="display-4 text-primary fw-semibold">{movie.title}</h1>
                            <p className="h5 text-muted">Directed by: {movie.director}</p>
                            <p className="text-muted"><strong>Release Year:</strong> {movie.release_year}</p>
                            <p className="lead">{movie.abstract}</p>
                            <p><strong>Genre:</strong> {movie.genre}</p>
                        </div>
                    </>
                )}
            </div>

            {/* Reviews Section */}
            <div className="mt-5">
                <h3 className="mb-4">Reviews</h3>
                <ul className="list-group list-group-flush">
                    {reviews?.map((review, index) => (
                        <li className="list-group-item d-flex justify-content-between align-items-center shadow-sm mb-4">
                            <div className="d-flex flex-column">
                                <strong>{review.name}</strong>
                                <small className="text-muted">{formatDate(review.created_at)}</small>
                                <p className="mt-2">{review.text}</p>
                            </div>
                            <div className="badge bg-success text-white">{review.vote}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
