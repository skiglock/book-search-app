import React, { useEffect } from "react";
import "./App.css";
import BookFilters from "./components/BookFilters";
import BookList from "./components/BookList";
import Preloader from "./components/Preloader";
import { useAppActions } from "./hooks/useAppActions";
import { useAppSelector } from "./hooks/useAppSelector";
import { EBookCategory, EBookSort } from "./types/book";

const App: React.FC = () => {
  const { fetchBooks } = useAppActions();
  const { books, totalItems, loading, error } = useAppSelector(
    (state) => state.book
  );

  useEffect(() => {
    fetchBooks({
      page: 1,
      limit: 30,
      category: EBookCategory.ART,
      sort: EBookSort.NEWEST,
      search: "",
    });
  }, []);
  return (
    <div className="wrapper">
      <BookFilters />
      {!loading && !error && (
        <h1 style={{ textAlign: "center", padding: "20px 0" }}>
          {books.length === 0 ? "Нету книг" : `Количество книг: ${totalItems}`}
        </h1>
      )}
      {error && !loading && <h1>{error}</h1>}
      {loading && <Preloader />}
      <BookList books={books} />
    </div>
  );
};

export default App;
