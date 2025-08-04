import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slugify from 'slugify';

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
                            <Link to={`/movie/${slugify(movie.title, { lower: true, replacement: '-' })}`}>
                                <div className="position-relative overflow-hidden rounded shadow movie-card">
                                    <img src={movie.image} alt={movie.title} className="img-fluid w-100" style={{ objectFit: "cover", height: "400px" }} />
                                    <div className="movie-overlay d-flex flex-column justify-content-end p-3">
                                        <h5 className="text-white">{movie.title}</h5>
                                        <p className="text-white-50 mb-0">{movie.director}</p>
                                        <p className="text-white-50">{movie.release_year}</p>
                                    </div>
                                </div>
                            
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
