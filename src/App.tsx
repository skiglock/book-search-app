import React, { useEffect, useState } from "react";
import "./App.scss";
import BookFilters from "./components/BookFilters";
import BookList from "./components/BookList";
import Button from "./components/Button";
import Preloader from "./components/Preloader";
import { useAppActions } from "./hooks/useAppActions";
import { useAppSelector } from "./hooks/useAppSelector";
import { EBookCategory, EBookSort } from "./types/book";

const App: React.FC = () => {
  const { fetchBooks, setBooksFilter, loadMoreBooks } = useAppActions();
  const { books, totalItems, loading, error, page, filters } = useAppSelector(
    (state) => state.book
  );
  const [searchValue, setSearchValue] = useState("");

  const { category, search, sort } = filters;

  useEffect(() => {
    fetchBooks(page, 20, {
      category: EBookCategory.ART,
      sort: EBookSort.NEWEST,
      search,
    });
  }, [page, category, sort, search]);

  const handleClickSearch = () => {
    if (searchValue !== search || !searchValue) {
      setBooksFilter("search", searchValue);
    }
  };
  return (
    <>
      <header className="header">
        <div>
          <div className="search">
            <input
              type="text"
              placeholder="Введите название книги"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button onClick={handleClickSearch}>Найти</Button>
          </div>
          <BookFilters
            onChangeFilter={(filter, value) => console.log(filter, value)}
          />
        </div>
      </header>
      {!loading && !error && (
        <h1 style={{ textAlign: "center", padding: "20px 0" }}>
          {books.length === 0 ? "Нету книг" : `Количество книг: ${totalItems}`}
        </h1>
      )}
      {error && !loading && <h1>{error}</h1>}
      <BookList books={books} />
      {loading && <Preloader />}
      {!loading && !error && books.length !== totalItems && (
        <div className="loadMore">
          <Button onClick={loadMoreBooks}>Загрузить еще</Button>
        </div>
      )}
    </>
  );
};

export default App;
