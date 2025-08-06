import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); 

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const getMovieBySlug = (slug) => {
    return fetch(`http://localhost:3000/movies/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedMovie(data);     
      })
      .catch((err) => {
        console.error("Errore durante il fetch del film:", err);
        return null;
      });
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
