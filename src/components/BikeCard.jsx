import { Link } from "react-router";

function BikeCard({ bike, onRent, onReturn }) {


  function showEngine(cc) {
    if (cc === 0) {
      return "Electric ⚡";
    }
    return cc + " cc";
  }

  // decide button 
  function showButton() {
    // under maintenance — no button
    if (bike.isAvailable === false) {
      return <span className="maint-text">Under Maintenance</span>;
    }

    // already rented — show Return
    if (bike.isRented === true) {
      return (
        <button onClick={() => onReturn(bike.id)} className="return">
          Return
        </button>
      );
    }

    // free and available — show Rent
    return (
      <button onClick={() => onRent(bike.id)} className="rent">
        Rent
      </button>
    );
  }

  return (
    <div className="bike-card">
      <div className="card-header">
        <h3>{bike.name}</h3>
        {/* availability badge */}
        {bike.isAvailable ? (
          <span className="badge green">Available</span>
        ) : (
          <span className="badge red">Under Maintenance</span>
        )}
      </div>

      <p><strong>Brand:</strong> {bike.brand}</p>
      <p><strong>Type:</strong> {bike.type}</p>
      <p><strong>Price:</strong> ₹{bike.pricePerHour}/hr</p>
      <p><strong>Location:</strong> {bike.location}</p>
      <p><strong>Engine:</strong> {showEngine(bike.engineCC)}</p>

      <div className="card-actions">
        <Link to={`/bikes/${bike.id}`}>View Details</Link>
        {showButton()}
      </div>
    </div>
  );
}

export default BikeCard;
