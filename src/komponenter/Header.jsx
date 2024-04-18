import { NavLink } from "react-router-dom"
import logo from "../assets/lille_logo.svg"


export default function Header() {

    /*Javascript skal stå her*/

    return (
    <>
    <div className="header">
    <NavLink to="/"> <img id="logo" src={logo} alt="logo" /></NavLink>
        <nav>
            <NavLink to="/error">Cases</NavLink>
            <NavLink to="/kontakt">Kontakt</NavLink>
            <NavLink to="/omos">Om os</NavLink>
            <NavLink to="/webinar">Book Webinar</NavLink>
        </nav>

       
    </div>

    
    
    </>
    
    ) }