import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

export default function MovieDetailPage(){
    const { slug } = useParams();
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState(null);
    

    useEffect(() => {
        fetch(`http://localhost:3000/movies/${slug}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.reviews)
                setMovie(data);
                setReviews(data.reviews)
            });
    }, [slug]);

    return(
        <>
            <div className="container">
                <div className="row">
                    {movie && (
                        <>
                            <div className="col-5">
                                <img src={movie.image} style={{width:'100%'}} alt="" />
                            </div>
                            <div className="col-7">
                                <h1>{movie.title}</h1>
                                <p>{movie.director}</p>
                                <p>{movie.release_year}</p>
                                <p>{movie.abstract}</p>
                                <p >{movie.genre}</p>
                            </div>
                        </>
                    )}
                </div>
                {/* reviews  */}
                <ul class="list-group list-group-flush">
                    {reviews?.map(review =>{
                        return(
                            <li class="list-group-item d-flex justify-content-space-around">
                                <p>{review.name}</p>
                                <p>{review.created_at}</p>
                                <p>{review.text}</p>
                                <p>{review.vote}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}