import { useParams, useNavigate } from "react-router";
import { useState } from "react";

function BikeDetails({ bikes, onRent, onReturn }) {

  // get the :id from the URL  e.g. /bikes/3  →  id = "3"
  const { id } = useParams();

  // navigate(-1) goes back to previous page
  const navigate = useNavigate();

  // hours counter — starts at 1, goes up to 12
  const [hours, setHours] = useState(1);

  // find the bike whose id matches the URL id
  // Number(id) converts "3" string to 3 number
  let bike = null;
  for (let i = 0; i < bikes.length; i++) {
    if (bikes[i].id === Number(id)) {
      bike = bikes[i];
    }
  }

  // if no bike found, show message
  if (bike === null) {
    return (
      <div className="page">
        <p>Bike not found.</p>
      </div>
    );
  }

  // engine display helper
  function showEngine(cc) {
    if (cc === 0) {
      return "Electric ⚡";
    }
    return cc + " cc";
  }

  // minus button — don't go below 1
  function decreaseHours() {
    if (hours > 1) {
      setHours(hours - 1);
    }
  }

  // plus button — don't go above 12
  function increaseHours() {
    if (hours < 12) {
      setHours(hours + 1);
    }
  }

  // total cost = price × hours
  const totalRent = bike.pricePerHour * hours;

  // decide button in details page
  function showButton() {
    if (bike.isAvailable === false) {
      return <span className="maint-text">Under Maintenance</span>;
    }
    if (bike.isRented === true) {
      return (
        <button onClick={() => onReturn(bike.id)} className="return">
          Return Bike
        </button>
      );
    }
    return (
      <button onClick={() => onRent(bike.id)} className="rent">
        Rent Bike
      </button>
    );
  }

  return (
    <div className="page">
      <button onClick={() => navigate(-1)} className="back-btn">← Back</button>

      <div className="detail-card">
        <div className="detail-header">
          <h2>{bike.name}</h2>
          {bike.isAvailable ? (
            <span className="badge green">Available</span>
          ) : (
            <span className="badge red">Under Maintenance</span>
          )}
        </div>

        <p><strong>Brand:</strong> {bike.brand}</p>
        <p><strong>Type:</strong> {bike.type}</p>
        <p><strong>Engine:</strong> {showEngine(bike.engineCC)}</p>
        <p><strong>Color:</strong> {bike.color}</p>
        <p><strong>Mileage:</strong> {bike.mileage} km/l</p>
        <p><strong>Location:</strong> {bike.location}</p>
        <p><strong>Price:</strong> ₹{bike.pricePerHour}/hr</p>

        {/* hours counter */}
        <div className="hours-counter">
          <p><strong>Select Hours:</strong></p>
          <div className="counter-row">
            <button onClick={decreaseHours} className="counter-btn">−</button>
            <span className="hours-display">{hours}</span>
            <button onClick={increaseHours} className="counter-btn">+</button>
          </div>
          <p className="total-rent">Total Rent: ₹{totalRent}</p>
        </div>

        <div className="detail-actions">
          {showButton()}
        </div>
      </div>
    </div>
  );
}

export default BikeDetails;
