import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import bikesData from "./data/bikes";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bikes from "./pages/Bikes";
import BikeDetails from "./pages/BikeDetails";
import Rented from "./pages/Rented";
import "./App.css";

function App() {

  const [bikes, setBikes] = useState(bikesData);

  function handleRent(id) {
    let updatedList = [];

    for (let i = 0; i < bikes.length; i++) {
      if (bikes[i].id === id) {
        updatedList.push({ ...bikes[i], isRented: true });
      } else {
        updatedList.push(bikes[i]);
      }
    }

    setBikes(updatedList);
  }

  // when Return button clicked — same thing but isRented back to false
  function handleReturn(id) {
    let updatedList = [];

    for (let i = 0; i < bikes.length; i++) {
      if (bikes[i].id === id) {
        updatedList.push({ ...bikes[i], isRented: false });
      } else {
        updatedList.push(bikes[i]);
      }
    }

    setBikes(updatedList);
  }

  // count rented (navbar)
  let rentedCount = 0;
  for (let i = 0; i < bikes.length; i++) {
    if (bikes[i].isRented === true) {
      rentedCount = rentedCount + 1;
    }
  }

  return (
    <BrowserRouter>
      <Navbar rentedCount={rentedCount} />
      <Routes>
        <Route path="/" element={<Home bikes={bikes} />} />
        <Route
          path="/bikes"
          element={<Bikes bikes={bikes} onRent={handleRent} onReturn={handleReturn} />}
        />
        <Route
          path="/bikes/:id"
          element={<BikeDetails bikes={bikes} onRent={handleRent} onReturn={handleReturn} />}
        />
        <Route path="/rented" element={<Rented bikes={bikes} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
