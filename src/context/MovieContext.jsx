import { createContext, useState, useEffect, useContext } from "react";
import { LoaderContext } from "./LoaderContext";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null); 
    const { showLoader, hideLoader } =useContext(LoaderContext);   

    useEffect(() => {
        showLoader();
        fetch("http://localhost:3000/movies")
        .then((res) => res.json())
        .then((data) => setMovies(data))
        .finally(() => hideLoader());
    }, []);

    const getMovieBySlug = (slug) => {
        showLoader();
        return fetch(`http://localhost:3000/movies/${slug}`)
        .then((res) => res.json())
        .then((data) => {
            setSelectedMovie(data);     
        })
        .catch((err) => {
            console.error("Errore durante il fetch del film:", err);
            return null;
        })
        .finally(() => hideLoader());
    };

    return (
        <MovieContext.Provider
        value={{
            movies,
            setMovies,
            selectedMovie,        
            setSelectedMovie,
            getMovieBySlug,
        }}
        >
        {children}
        </MovieContext.Provider>
    );
}
