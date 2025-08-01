import { NavLink } from "react-router-dom"

export default function Header(){
    const menu = [
        {
            id:1,
            text: 'Home',
            to: '/'
        },
        {
            id:2,
            text: 'Movies',
            to: '/movies'
        },
    ]
    return(
        <>
        <header className="bg-dark">
            <ul class="nav justify-content-center py-3 " >
                {menu.map(item =>{
                    return(
                        <li class="nav-item" key={item.id}>
                                   <NavLink key={item.id} to={item.to} className={({ isActive }) => `nav-link text-decoration-none me-1 ${isActive ? 'text-white fw-bold' : 'text-secondary'}` } aria-current="page" > {item.text} </NavLink>
                        </li>

                    )
                })}
            </ul>

        </header>
            
        
        </>
    )
}