import { NavLink } from 'react-router-dom'
function Navigation() {
    return (
        <nav className='nav'>
            <p>Marion Stéphan <br></br>Développeuse Web</p>
            <div>
                <NavLink className={({ isActive}) => (isActive ? "nav__link nav__link__active" : "nav__link nav__link__inactive")} to="/">Accueil</NavLink>
                <NavLink className={({ isActive}) => (isActive ? "nav__link nav__link__active" : "nav__link nav__link__inactive")} to="/Formations">Formations</NavLink>
                <NavLink className={({ isActive}) => (isActive ? "nav__link nav__link__active" : "nav__link nav__link__inactive")} to="/Expériences">Expériences</NavLink>
                <NavLink className={({ isActive}) => (isActive ? "nav__link nav__link__active" : "nav__link nav__link__inactive")} to="/Portfolio">Portfolio</NavLink>
                <a className='nav__link' href="mailto:marion.stephan1@hotmail.fr">Contact</a>
            </div>
        </nav>
    )
}

export default Navigation