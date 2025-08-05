import { useEffect, useState } from "react";

import MoviesCard from "../components/MoviesCard";

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
                    <MoviesCard movies={movies}/>
                </div>
            </section>
        </>
    )
}
