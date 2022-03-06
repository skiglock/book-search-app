import React from "react";
import "./App.css";
import BookFilters from "./components/BookFilters";
import BookList from "./components/BookList";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <BookFilters />
      <BookList />
    </div>
  );
};

export default App;
