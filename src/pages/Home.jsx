function Home({ bikes }) {
  /* counts */
  const total = bikes.length;
  const available = bikes.filter((b) => b.isAvailable).length;
  const rented = bikes.filter((b) => b.isRented).length;

  return (
    <div className="page">
      <h1>🏍️ Bike Rental</h1>
      <p>Rent your favourite bike by the hour. Quick, easy and affordable.</p>

      <div className="stats">
        <div className="stat-box">
          <h2>{total}</h2>
          <p>Total Bikes</p>
        </div>
        <div className="stat-box">
          <h2>{available}</h2>
          <p>Available</p>
        </div>
        <div className="stat-box">
          <h2>{rented}</h2>
          <p>Rented</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
