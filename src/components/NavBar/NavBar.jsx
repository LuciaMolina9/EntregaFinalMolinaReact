import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
        <h1>calzados y mas</h1>
        <nav>
            <ul>
                <li>Zapatillas</li>
                <li>Botas</li>
                <li>Sandalias</li>
                <li>Borcegos</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar