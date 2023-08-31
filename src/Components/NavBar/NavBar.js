import Logo from "../../Assets/Brand-ecommerce.webp";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

function NavBar() {

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to={"/"}>
          <img src={Logo} alt="Logo marca" />
        </Link>
      </div>
      <div className="carrolinks">
        <div className="links">
          <Link to={"/category/Air-Max"}>AIR MAX</Link>
          <Link to={"/category/Air-Force"}>AIR FORCE</Link>
          <Link to={"/category/Dunk"}>DUNK</Link>
          <Link to={"/category/Jordan"}>JORDAN</Link>
          <ThemeSwitch/>
        </div>
        <div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
