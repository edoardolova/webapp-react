export default function Footer(){
    return(
        <>
            <footer className="bg-dark text-light py-4 mt-auto">
                <div className="container">
                    <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5>MovieVerse</h5>
                        <p>La tua destinazione per recensioni autentiche, opinioni sincere e amore per il cinema.</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Link utili</h5>
                        <ul className="list-unstyled">
                        <li><a href="#" className="text-decoration-none text-light">Home</a></li>
                        <li><a href="#" className="text-decoration-none text-light">Recensioni</a></li>
                        <li><a href="#" className="text-decoration-none text-light">Contattaci</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Seguici</h5>
                        <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="#" className="text-light text-decoration-none">
                                <i className="bi bi-instagram fs-5 me-2"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="text-light text-decoration-none">
                                <i className="bi bi-facebook fs-5 me-2"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="text-light text-decoration-none">
                                <i className="bi bi-youtube fs-5 me-2"></i>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <hr className="border-top border-light" />
                    <p className="text-center mb-0">&copy; {new Date().getFullYear()} MovieVerse. Tutti i diritti riservati.</p>
                </div>
            </footer>

        </>
    )
}