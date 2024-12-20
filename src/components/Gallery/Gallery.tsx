import React from "react";
import { Place } from "../../models/Place";
import styles from "./Gallery.module.scss";

interface GalleryProps {
  places: Place[];
}

const Gallery: React.FC<GalleryProps> = ({ places }) => {
  return (
    <div className={styles.gallery}>
      {places.map((place) => (
        <div key={place.id} className={styles.card}>
          <img src={place.imageUrl} alt={place.name} />
          <h3>{place.name}</h3>
          <p>{place.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;