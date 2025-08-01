import { useEffect, useState } from "react"

export default function HomePage(){
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data)

        })
    },[])
    return(
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                    <p className="col-md-8 fs-4">
                        Using a series of utilities, you can create this jumbotron, just
                        like the one in previous versions of Bootstrap. Check out the
                        examples below for how you can remix and restyle it to your liking.
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        Example button
                    </button>
                </div>
            </div>

            <section  className="container mb-3">
                <h2 className="py-4">Scopri cosa pensano dei tuoi film preferiti</h2>
                <div className="row gy-4">
                    {reviews?.map(review =>{
                        return(
                        <div className="col col-md-4 col-lg-3 " key={review.id}>
                            <div class="card h-100" >
                                <div class="card-body text-center">
                                    <h5 class="card-title">{review.name}</h5>
                                    <p class="card-text">{review.text}</p>
                                </div>
                                </div>

                        </div>

                        )
                    })}

                </div>
            </section>
            
        </>
    )
}