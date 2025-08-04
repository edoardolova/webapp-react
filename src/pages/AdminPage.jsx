import { useState } from "react";

export default function AdminPage() {
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [abstract, setAbstract] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('director', director);
        formData.append('genre', genre);
        formData.append('release_year', releaseYear);
        formData.append('abstract', abstract);
        formData.append('image', imageFile);
        console.log(formData)

        fetch('http://localhost:3000/movies', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                setErrorMsg(data.error);
                setSuccessMsg('');
            } 
            else {
                setSuccessMsg(`Film "${data.movie.title}" aggiunto con successo!`);
                setErrorMsg('');

                // Reset form
                setTitle('');
                setDirector('');
                setGenre('');
                setReleaseYear('');
                setAbstract('');
                setImageFile(null);
            }
        })
        .catch(err => {
            setErrorMsg("Errore durante l'invio del form.");
            setSuccessMsg('');
        });
    };

    return (
        <div className="container py-5">
            <h1 className="mb-4">Admin - Aggiungi Film</h1>

            {successMsg && <div className="alert alert-success">{successMsg}</div>}
            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-3">
                    <label className="form-label">Titolo</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Regista</label>
                    <input type="text" className="form-control" value={director} onChange={(e) => setDirector(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Genere</label>
                    <input type="text" className="form-control" value={genre} onChange={(e) => setGenre(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Anno di uscita</label>
                    <input type="number" className="form-control" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Abstract</label>
                    <textarea className="form-control" rows="4" value={abstract} onChange={(e) => setAbstract(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Immagine (JPG/PNG)</label>
                    <input type="file" className="form-control" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Aggiungi Film</button>
            </form>
        </div>
    );
}
