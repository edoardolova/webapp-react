export default function ReviewsCard({reviews}){
    return(
        <>
            {reviews?.map((review) => {
                return (
                    <div className="col col-md-4 col-lg-3" key={review.id}>
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <h5 className="card-title">{review.name}</h5>
                                <p className="card-text">"{review.text}"</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>

    )
}