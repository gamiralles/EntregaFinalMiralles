import Logo from "../../Assets/LogoS.png";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo marca" className="logo" />
      <div className="links">
        <a href="">Hombre</a>
        <a href="">Mujer</a>
        <a href="">Niños</a>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
