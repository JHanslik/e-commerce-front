import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <h1>E-Commerce</h1>
      <ul>
        <Link to={"/"}>
          <li>Article</li>
        </Link>
        <Link to={"/"}>
          <li>Category</li>
        </Link>
        <Link to={"/"}>
          <li>Panier</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
