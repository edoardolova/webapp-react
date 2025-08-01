import { useEffect, useState } from "react";

export default function MoviesPage(){

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then(res => res.json())
            .then(data => {
                setMovies(data);
            });
    }, []);
    return(
        <>
            <section className="container mb-5">
                <h2 className="py-4">Film in evidenza</h2>
                <div className="row gy-4">
                    {movies?.map((movie) => (
                        <div className="col col-md-4 col-lg-3" key={movie.id}>
                            <div className="position-relative overflow-hidden rounded shadow movie-card">
                                <img src={movie.image} alt={movie.title} className="img-fluid w-100" style={{ objectFit: "cover", height: "400px" }} />
                                <div className="movie-overlay d-flex flex-column justify-content-end p-3">
                                    <h5 className="text-white">{movie.title}</h5>
                                    <p className="text-white-50 mb-0">{movie.director}</p>
                                    <p className="text-white-50">{movie.release_year}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
// "id": 1,
// "title": "Inception",
// "director": "Christopher Nolan",
// "genre": "Science Fiction",
// "release_year": 2010,
// "abstract": "A skilled thief is given a chance at redemption if he can successfully perform inception.",
// "image": "http://localhost:3000/inception.jpg",
// "created_at": "2024-11-29T10:40:13.000Z",
// "updated_at": "2025-05-22T10:55:27.000Z"