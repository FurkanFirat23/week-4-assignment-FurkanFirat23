import { useContext } from "react";
import Button from "./Button";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Book } from "../pages/Book";
import { BookList } from "../pages/BookList";
import Home from "../pages/Home";
import NewBook from "../pages/NewBook";
import NotFound from "../pages/NotFound";
import Writers from "../pages/Writers";
import ThemeContext from "../context/ThemeContext";

function Container() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Button />
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/writers">Writers</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/writers" element={<Writers />} />
          <Route path="/books/:id" element={<Book />} />
          <Route path="/books/new" element={<NewBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}

export default Container;
