export default function ReviewList({reviews}){
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('it-IT'); 
    };


    return(
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
    )
}