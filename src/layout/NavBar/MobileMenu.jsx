import { NavLink } from 'react-router-dom'
import {useState} from "react"
function MobileMenu() {
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    

    return (
        <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"} nav__mobile`}>
            <p>Marion Stéphan <br></br>Développeuse Web</p>
            <div>
                <NavLink className='nav__mobile__link reverse-animation' to="/">Accueil</NavLink>
                <NavLink className='nav__mobile__link reverse-animation' to="/Formations">Formations</NavLink>
                <NavLink className='nav__mobile__link reverse-animation' to="/Experiences">Expériences</NavLink>
                <NavLink className='nav__mobile__link reverse-animation' to="/Portfolio">Portfolio</NavLink>
                <a className='nav__mobile__link' href="mailto:marion.stephan1@hotmail.fr">Contact</a>
            </div>
            <button className="navbar__burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
        </div>
    )
}

export default MobileMenu
