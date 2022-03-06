import React from "react";
import styles from "./BookList.module.scss";
import Book from "../Book";
import { IBook } from "../../types/book";

interface IBookListProps {
  books: IBook[];
}

const BookList: React.FC<IBookListProps> = ({ books }) => {
  return (
    <div className={styles.books}>
      {books &&
        books.map((book, key) => (
          <Book
            key={`${book.id}_${key}`}
            title={book.volumeInfo.title}
            categories={book.volumeInfo.categories}
            img={book.volumeInfo.imageLinks?.thumbnail}
            authors={book.volumeInfo.authors}
          />
        ))}
    </div>
  );
};

export default BookList;
