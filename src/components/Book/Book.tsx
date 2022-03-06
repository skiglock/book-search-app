import React from "react";
import styles from "./Book.module.scss";

interface IBookProps {
  title: string;
  categories: string[];
  img: string;
  authors: string[];
}

const Book: React.FC<IBookProps> = (props) => {
  const { title, categories, img, authors } = props;
  const defaultImg =
    "https://dictionary.cambridge.org/ru/images/thumb/book_noun_001_01679.jpg";
  return (
    <article className={styles.book}>
      <img
        className={styles.bookImg}
        src={img ? img : defaultImg}
        alt={title}
      />
      <a className={styles.bookCategory} href="/">
        {categories}
      </a>
      <h4 className={styles.bookTitle}>{title}</h4>
      <h5 className={styles.bookAuthors}>{authors.join(",")}</h5>
    </article>
  );
};

export default Book;
