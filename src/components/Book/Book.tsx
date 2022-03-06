import React from "react";
import styles from "./Book.module.scss";

const Book: React.FC = () => {
  const defaultImg =
    "https://dictionary.cambridge.org/ru/images/thumb/book_noun_001_01679.jpg";
  return (
    <article className={styles.book}>
      <img className={styles.bookTitle} src={defaultImg} alt="" />
      <a className={styles.bookCategory} href="/">
        Категория
      </a>
      <h4 className={styles.bookTitle}>Заголовок</h4>
      <h5 className={styles.bookAuthors}>Авторы</h5>
    </article>
  );
};

export default Book;
