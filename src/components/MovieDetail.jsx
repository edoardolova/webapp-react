export default function MovieDetail({movie}){
    return(
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
    )
}