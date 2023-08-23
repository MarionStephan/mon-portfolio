import { NavLink } from 'react-router-dom'
function DesktopNavbar() {
    return (
        <div className='nav__desktop'>
            <p>Marion Stéphan <br></br>Développeuse Web</p>
            <div>
                <NavLink className={({ isActive}) => (isActive ? "nav__desktop__link nav__desktop__desktop__link__active" : "nav__desktop__link nav__desktop__desktop__link__inactive")} to="/">Accueil</NavLink>
                <NavLink className={({ isActive}) => (isActive ? "nav__desktop__link nav__desktop__link__active" : "nav__desktop__link nav__desktop__link__inactive")} to="/Formations">Formations</NavLink>
                <NavLink className={({ isActive}) => (isActive ? "nav__desktop__link nav__desktop__link__active" : "nav__desktop__link nav__desktop__link__inactive")} to="/Experiences">Expériences</NavLink>
                <NavLink className={({ isActive}) => (isActive ? "nav__desktop__link nav__desktop__link__active" : "nav__desktop__link nav__desktop__link__inactive")} to="/Portfolio">Portfolio</NavLink>
                <a className='nav__desktop__link' href="mailto:marion.stephan1@hotmail.fr">Contact</a>
            </div>
        </div>
    )
}

export default DesktopNavbar