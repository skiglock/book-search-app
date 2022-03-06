import React from "react";
import styles from "./BookFilters.module.scss";

interface IBookFiltersProps {
  onChangeFilter: (filter: string, value: string) => void;
}

const BookFilters: React.FC<IBookFiltersProps> = ({ onChangeFilter }) => {
  return (
    <div className={styles.filters}>
      <select
        name="category"
        onChange={(e) => onChangeFilter(e.target.name, e.target.value)}
      >
        <option>Все</option>
        <option>Art</option>
        <option>Biography</option>
        <option>Computers</option>
        <option>History</option>
        <option>Medical</option>
        <option>Poetry</option>
      </select>
      <select
        name="sort"
        onChange={(e) => onChangeFilter(e.target.name, e.target.value)}
      >
        <option>Все</option>
        <option>Сначало новые</option>
        <option>Сначало старые</option>
      </select>
    </div>
  );
};

export default BookFilters;
