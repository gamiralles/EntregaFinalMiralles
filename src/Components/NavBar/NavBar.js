import Logo from "../../Assets/LogoS.png";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo marca"/>
      </div>
      <div className="carrolinks">
        <div className="links">
          <a href="">AIR MAX</a>
          <a href="">AIR FORCE</a>
          <a href="">DUNK</a>
          <a href="">JORDAN</a>
        </div>
        <div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
