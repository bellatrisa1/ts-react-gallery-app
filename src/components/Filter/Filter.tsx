import React from "react";
import styles from "./Filter.module.scss";

interface FilterProps {
  setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FC<FilterProps> = ({ setCategoryFilter }) => {
  return (
    <div className={styles.filter}>
      <button onClick={() => setCategoryFilter("all")}>All</button>
      <button onClick={() => setCategoryFilter("countries")}>Countries</button>
      <button onClick={() => setCategoryFilter("food")}>Food</button>
      <button onClick={() => setCategoryFilter("attractions")}>
        Attractions
      </button>
    </div>
  );
};

export default Filter;
