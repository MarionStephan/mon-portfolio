import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <nav className='header'>
            <p>Marion Stéphan <br></br>Développeuse Web</p>
            <ul>
                <li className='header__nav'><NavLink className={({ isActive}) => (isActive ? "header__nav__link header__nav__link__active" : "header__nav__link header__nav__link__inactive")} to="/">Accueil</NavLink></li> 
                <li className='header__nav'><NavLink className={({ isActive}) => (isActive ? "header__nav__link header__nav__link__active" : "header__nav__link header__nav__link__inactive")} to="/Formations">Formations</NavLink></li> 
                <li className='header__nav'><NavLink className={({ isActive}) => (isActive ? "header__nav__link header__nav__link__active" : "header__nav__link header__nav__link__inactive")} to="/Expériences">Expériences</NavLink></li> 
                <li className='header__nav'><NavLink className={({ isActive}) => (isActive ? "header__nav__link header__nav__link__active" : "header__nav__link header__nav__link__inactive")} to="/Portfolio">Portfolio</NavLink></li> 
                <li className='header__nav'><a href="mailto:marion.stephan1@hotmail.fr">Contact</a></li> 
            </ul>
        </nav>
    )
}

export default Header