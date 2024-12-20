import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import { Place } from "./models/Place";
import Gallery from "./components/Gallery/Gallery";
import Filter from "./components/Filter/Filter";
import AddPlaceForm from "./components/AddPlaceForm/AddPlaceForm";
import data from "./data.json";

const App: React.FC = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  useEffect(() => {
    setPlaces(data);
  }, []);

  const filteredPlaces =
    categoryFilter === "all"
      ? places
      : places.filter((place) => place.category === categoryFilter);

  const handleAddPlace = (newPlace: Place) => {
    setPlaces([...places, newPlace]);
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Gallery of all my travels</h1>
      </header>
      <Filter setCategoryFilter={setCategoryFilter} />
      <AddPlaceForm onAddPlace={handleAddPlace} />
      <Gallery places={filteredPlaces} />
    </div>
  );
};

export default App;
