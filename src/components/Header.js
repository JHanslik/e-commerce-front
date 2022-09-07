import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between mb-10 pb-5 border-b-2 bg-gray-600 p-5">
      <h1 className="font-semibold text-2xl text-white">E-Commerce</h1>
      <nav className="flex items-center gap-10">
        <Link
          to={"/"}
          className="text-white rounded px-3.5 py-1.5 hover:bg-gray-800"
        >
          Article
        </Link>
        <Link
          to={"/categories"}
          className="text-white  rounded px-3.5 py-1.5 hover:bg-gray-800"
        >
          Category
        </Link>
        <Link
          to={"/"}
          className="text-white  rounded px-3.5 py-1.5 hover:bg-gray-800"
        >
          Panier
        </Link>
      </nav>
    </header>
  );
};

export default Header;
