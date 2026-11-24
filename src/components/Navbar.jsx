import { Link } from "react-router";

function Navbar({ rentedCount }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">🏍️ BikeRental</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/bikes">Bikes</Link>
        {/* rented count */}
        <Link to="/rented">Rented ({rentedCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
