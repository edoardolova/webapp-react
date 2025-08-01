import { useEffect, useState } from "react";

export default function HomePage() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, []);

    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Le opinioni che contano</h1>
                    <p className="col-md-8 fs-4">
                        Scopri cosa pensano gli altri spettatori dei tuoi film preferiti, condividi la tua esperienza
                        e lasciati ispirare da chi ama il cinema quanto te.
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        Inizia a recensire
                    </button>
                </div>
            </div>

            <section className="container mb-5">
                <h2 className="py-4">Le recensioni più recenti</h2>
                <div className="row gy-4">
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
                </div>
            </section>

            <section className="container mb-3">
                <h2 className="py-4">Hai visto un film? Lascia la tua opinione</h2>
                <div className="row">
                    <div className="col-6">
                        <p>
                            Crediamo che ogni voce meriti di essere ascoltata. Condividi il tuo punto di vista
                            sui film che hai visto e contribuisci a creare una community appassionata e rispettosa,
                            dove ognuno può dire la sua.
                        </p>
                    </div>
                    <div className="col-6 text-center">
                        <img src="/reviewsImg.svg" alt="Illustrazione recensioni" style={{ height: '250px' }} />
                    </div>
                </div>
            </section>

            <section className="container mb-5 text-center">
                <h2 className="py-4">Vuoi collaborare con noi?</h2>
                <p>
                    Siamo sempre alla ricerca di appassionati di cinema, sviluppatori, designer e content creator.
                    Se vuoi far parte del progetto, contattaci!
                </p>
            </section>
        </>
    );
}
