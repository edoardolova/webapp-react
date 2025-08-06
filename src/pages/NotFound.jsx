import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center p-5 mx-auto my-auto">
      <h1 className="display-4">404 - Scena mancante!</h1>
      <p className="lead">Questa pagina non fa parte del copione…</p>
      <p>Forse stai cercando un film da recensire?</p>
      <Link to="/" className="btn btn-primary mt-3">
        Torna alla Home
      </Link>
    </div>
  );
}
