export default function ReviewFunction({
    showModal,
    setShowModal,
    name,
    setName,
    text,
    setText,
    vote,
    setVote,
    onSubmit
}){

    if (!showModal){
        return
    }

    return(
        <div className="modal fade show" style={{  display: 'block',  backgroundColor: 'rgba(0, 0, 0, 0.84)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000, }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"onClick={() => setShowModal(false)}>
            <div  className="modal-dialog" style={{  position: 'relative',  zIndex: 1060  }} onClick={(e) => e.stopPropagation()}>
                <div className="modal-content bg-dark text-light">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Aggiungi Recensione</h5>
                        <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label">Recensione</label>
                                <textarea className="form-control" id="text" rows="4" value={text} onChange={(e) => setText(e.target.value)} required ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="vote" className="form-label">Voto</label>
                                <select className="form-select" id="vote" value={vote} onChange={(e) => setVote(e.target.value)} required >
                                    {[1, 2, 3, 4, 5].map(val => (
                                        <option key={val} value={val}>{val}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="d-flex">
                                <button type="submit" className="btn btn-primary mx-auto" style={{ marginBottom: '20px' }} >
                                    Invia Recensione
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}