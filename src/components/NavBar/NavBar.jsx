import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
        <Link to = "/"><h1>Oh my Shoes!</h1></Link>
        <nav>
            <ul>
                <li><NavLink to = "/categoria/zapatillas" > Zapatillas </NavLink></li>
                <li><NavLink to = "/categoria/botas" > Botas </NavLink></li>
                <li><NavLink to = "/categoria/sandalias" > Sandalias </NavLink></li>
                <li><NavLink to = "/categoria/borcegos" > Borcegos </NavLink></li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar