import React from "react";
import styles from "./BookFilters.module.scss";

const BookFilters: React.FC = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.filtersItem}>
        <input type="text" placeholder="Введите название книги" />
        <button className={styles.filtersButton}>Найти</button>
      </div>
      <div className={styles.filtersItem}>
        <select>
          <option>Все</option>
          <option>Art</option>
          <option>Biography</option>
          <option>Computers</option>
          <option>History</option>
          <option>Medical</option>
          <option>Poetry</option>
        </select>
        <select>
          <option>Все</option>
          <option>Сначало новые</option>
          <option>Сначало старые</option>
        </select>
      </div>
    </div>
  );
};

export default BookFilters;
