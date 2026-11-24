function Rented({ bikes }) {
  /* only rented bikes */
  const rentedBikes = bikes.filter((b) => b.isRented);

  /* total price per hour */
  const total = rentedBikes.reduce((sum, b) => sum + b.pricePerHour, 0);

  return (
    <div className="page">
      <h2>Rented Bikes</h2>

      {rentedBikes.length === 0 ? (
        <p>No bikes rented.</p>
      ) : (
        <>
          <div className="rented-list">
            {rentedBikes.map((bike) => (
              <div key={bike.id} className="rented-item">
                <span>{bike.name} — {bike.brand}</span>
                <span>₹{bike.pricePerHour}/hr</span>
              </div>
            ))}
          </div>
          <p className="total-label">Total: ₹{total}/hr</p>
        </>
      )}
    </div>
  );
}

export default Rented;
