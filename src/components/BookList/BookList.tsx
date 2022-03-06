import React from "react";
import styles from "./BookList.module.scss";
import Book from "../Book";

const BookList: React.FC = () => {
  return (
    <div className={styles.books}>
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
};

export default BookList;
