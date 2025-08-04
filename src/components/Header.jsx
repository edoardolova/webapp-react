import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import slugify from "slugify";  

export default function Header() {
    const [searchQuery, setSearchQuery] = useState("");  
    const navigate = useNavigate();  

    const menu = [
        { id: 1,
            text: 'Home',
            to: '/'
        },
        { id: 2,
            text: 'Movies',
            to: '/movies'
        },
        { id: 3,
            text: 'Admin',
            to: '/admin'
        }
    ];

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
                    <div className="col-md-8">
                        <ul className="nav justify-content-center py-3">
                            {menu.map(item => (
                                <li className="nav-item" key={item.id}>
                                    <NavLink to={item.to} className={({ isActive }) => `nav-link text-decoration-none me-1 ${isActive ? 'text-white fw-bold' : 'text-secondary'}`} aria-current="page">
                                        {item.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* slug search*/}
                    <div className="col-md-4">
                        <form onSubmit={handleSearchSubmit} className="d-flex">
                            <input type="text" className="form-control" placeholder="Cerca un film" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                            <button type="submit" className="btn btn-primary ms-2">Cerca</button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}
