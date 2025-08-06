import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import slugify from "slugify";

export default function Header({ menu = [], showSearch = true }) {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (!searchQuery.trim()){
            return;
        } 

        const slug = slugify(searchQuery, { lower: true, replacement: '-' });
        navigate(`/movie/${slug}`);
    };

    return (
        <header className="bg-dark">
            <div className="container">
                <div className="row align-items-center">
                    <div className={`col-md-${showSearch ? '8' : '12'}`}>
                        <ul className="nav justify-content-center py-3">
                            {menu.map(item => (
                                <li className="nav-item" key={item.id}>
                                    <NavLink to={item.to} className={({ isActive }) => `nav-link text-decoration-none me-1 ${ isActive ? 'text-white fw-bold' : 'text-secondary' }` } >
                                        {item.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {showSearch && (
                        <div className="col-md-4">
                            <form onSubmit={handleSearchSubmit} className="d-flex">
                                <input type="text" className="form-control" placeholder="Cerca un film" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                                <button type="submit" className="btn btn-primary ms-2">Cerca</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
} 