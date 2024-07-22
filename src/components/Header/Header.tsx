import "./Header.scss";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <header>
      <Link to="/">
        <h1>FoodiePe</h1>
      </Link>
      <div className="links">
        <Link to="/">
          <p className="bdHome">Home</p>
        </Link>
        <Link to="/favorites">
          <p className="bdFave">Favorites</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
