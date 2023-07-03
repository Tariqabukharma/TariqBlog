import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <h1>Tariq Blog's</h1>
      <div className="links">
        <Link to="/*">Home</Link>
        <Link to="/">Blogs</Link>
      </div>
    </nav>
  );
};

export default Nav;
