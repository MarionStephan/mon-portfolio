import { NavLink } from 'react-router-dom'
import { useState } from "react"
function MobileMenu() {
    const [showLinks, setShowLinks] = useState(false)
    const [animateExit, setAnimateExit] = useState(false);
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
        setAnimateExit(true);
    }


    return (
        <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"} nav__mobile`}>
            <p>Marion Stéphan <br></br>Développeuse Web</p>
            <div>
            <NavLink className={`nav__mobile__link ${showLinks ? "reverse-animation" : (animateExit ? "reverse-exit-animation" : "")}`} to="/" onClick={handleShowLinks}>Accueil</NavLink>
<NavLink className={`nav__mobile__link ${showLinks ? "reverse-animation" : (animateExit ? "reverse-exit-animation" : "")}`} to="/Formations" onClick={handleShowLinks}>Formations</NavLink>
<NavLink className={`nav__mobile__link ${showLinks ? "reverse-animation" : (animateExit ? "reverse-exit-animation" : "")}`} to="/Experiences" onClick={handleShowLinks}>Expériences</NavLink>
<NavLink className={`nav__mobile__link ${showLinks ? "reverse-animation" : (animateExit ? "reverse-exit-animation" : "")}`} to="/Portfolio" onClick={handleShowLinks}>Portfolio</NavLink>
<a className={`nav__mobile__link ${showLinks ? "reverse-animation" : (animateExit ? "reverse-exit-animation" : "")}`} href="mailto:marion.stephan1@hotmail.fr" onClick={handleShowLinks}>Contact</a>

            </div>
            <button className="navbar__burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
        </div>
    )
}

export default MobileMenu
