import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetailPage() {
    const { slug } = useParams();
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [showModal, setShowModal] = useState(false); 
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [vote, setVote] = useState(1);

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

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            movie_id: movie.id,  
            name,
            text,
            vote,
        };
        console.log(newReview)

        fetch(`http://localhost:3000/reviews/${slug}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReview),
        })
        .then(res => res.json())
        .then(data => {
            setReviews([...reviews, data]);
            setShowModal(false);
            setName('');
            setText('');
            setVote(1);
        });
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

            <div className="mt-5">
                <div className="d-flex mb-4 align-items-center">
                    <h3 className="m-0 fs-2">Reviews</h3>
                    <button className="btn ms-auto border-0 btn-add-review" onClick={() => setShowModal(true)}><i class="bi bi-plus-circle text-primary fs-3"></i></button>
                </div>
                {/* Review Section */}
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

            
            {showModal && (
                <div className="modal fade show" style={{  display: 'block',  backgroundColor: 'rgba(0, 0, 0, 0.84)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000, }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"onClick={() => setShowModal(false)}>
                    <div  className="modal-dialog" style={{  position: 'relative',  zIndex: 1060  }} onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content bg-dark text-light">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Aggiungi Recensione</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Nome</label>
                                        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="text" className="form-label">Recensione</label>
                                        <textarea className="form-control" id="text" rows="4" value={text} onChange={(e) => setText(e.target.value)} required ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="vote" className="form-label">Voto</label>
                                        <select className="form-select" id="vote" value={vote} onChange={(e) => setVote(e.target.value)} required >
                                            {[1, 2, 3, 4, 5].map(val => (
                                                <option key={val} value={val}>{val}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="d-flex">
                                        <button type="submit" className="btn btn-primary mx-auto" style={{ marginBottom: '20px' }} >
                                            Invia Recensione
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
