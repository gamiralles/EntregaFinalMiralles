import Logo from "../../Assets/LogoS.png";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo marca" className="logo" />
      <div className="links">
        <button className="btn">Mujer</button>
        <button className="btn">Hombre</button>
        <button className="btn">Niños</button>
      </div>
      <CartWidget/>
    </nav>
  );
}

export default NavBar;
