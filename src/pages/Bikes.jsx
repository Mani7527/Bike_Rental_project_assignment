import { useState } from "react";
import BikeCard from "../components/BikeCard";

function Bikes({ bikes, onRent, onReturn }) {

  // search box text stored here
  const [search, setSearch] = useState("");

  // dropdown value stored here — default is "All"
  const [filter, setFilter] = useState("All");

  // step 1 — apply dropdown filter first
  let shown = [];

  for (let i = 0; i < bikes.length; i++) {
    if (filter === "All") {
      shown.push(bikes[i]);
    } else if (bikes[i].type === filter) {
      shown.push(bikes[i]);
    }
  }

  // step 2 — apply search on top of filtered list
  let finalList = [];

  for (let i = 0; i < shown.length; i++) {
    let nameMatch = shown[i].name.toLowerCase().includes(search.toLowerCase());
    let brandMatch = shown[i].brand.toLowerCase().includes(search.toLowerCase());

    if (search === "" || nameMatch || brandMatch) {
      finalList.push(shown[i]);
    }
  }

  return (
    <div className="page">
      <h2>All Bikes</h2>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by name or brand..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />

        {/* dropdown */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="All">All</option>
          <option value="Scooter">Scooter</option>
          <option value="Bike">Bike</option>
          <option value="Electric">Electric</option>
        </select>
      </div>

      {finalList.length === 0 ? (
        <p>No bikes found.</p>
      ) : (
        <div className="card-grid">
          {finalList.map((bike) => (
            <BikeCard
              key={bike.id}
              bike={bike}
              onRent={onRent}
              onReturn={onReturn}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Bikes;
