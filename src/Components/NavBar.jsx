import react from "react"
import {NavLink} from "react-router-dom"
import Navimg from '../Components/img/76d91cda1d534539a2d0899dd21e421e.png'

const NavBar = ()=>{
    return(
        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <NavLink className="navbar-brand Navimg" to="/">
    <img src={Navimg} className="Navimg" alt="ImgError" />
  </NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">

      <li className="nav-item Nitem">
        <NavLink className="nav-link nitem"  to="/Contact">Contact</NavLink>
      </li>
     
    </ul>
  </div>
</nav>
        </>

    )
}

export default NavBar;