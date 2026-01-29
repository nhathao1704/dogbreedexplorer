import "../styles/index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="logo">logo</ul>
        <ul className="nav-links"> 
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Pet</Link>
          </li>
          <li>
            <Link to="/aboutus">About us</Link>
          </li>

          <li>
            <Link to="/contact">Liên hệ</Link>
          </li>
        </ul>
        <div className="header-right">
            <div className="search-box1">
              <input placeholder="Find Your Favourite Pet Here" />
              <button>🔍</button>
            </div>

            <ul className="sign-in">
              <li><Link to="/login">Đăng nhập</Link></li>
              <li><Link to="/cart">Giỏ hàng</Link></li>
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
