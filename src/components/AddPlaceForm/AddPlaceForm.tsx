import React, { useState } from "react";
import { Place } from "../../models/Place";
import styles from "./AddPlaceForm.module.scss";

interface AddPlaceFormProps {
  onAddPlace: (place: Place) => void;
}

const AddPlaceForm: React.FC<AddPlaceFormProps> = ({ onAddPlace }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("mountains");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPlace = {
      id: Date.now(),
      name,
      category,
      imageUrl,
    };
    onAddPlace(newPlace);
    setName("");
    setCategory("mountains");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Title"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="countries">Countries</option>
        <option value="food">Food</option>
        <option value="attractions">Attractions</option>
      </select>
      <input
        type="url"
        placeholder="URL images"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPlaceForm;
