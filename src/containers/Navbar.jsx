import Admin from "../assets/images/avatar.png";
import { Search, Notlifyicon } from "../assets/css/icon";
import {} from "./_navbar.scss";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar_left">
        <h2>
        Tickets
        </h2>
      </div>
      <div className="Navbar_right">
        <div className="Navbar_right-btn">
          <Search />
          <Notlifyicon />
        </div>
        <div className="Navbar_right-boxs">
          <p className="Navbar_right-title">Jones Ferdinand</p>
          <img className="Navbar_right-adminimg" src={Admin} alt="Adminimg" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
