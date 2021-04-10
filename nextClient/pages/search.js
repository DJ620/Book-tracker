import { useState, useEffect } from "react";
import { getBooks } from "./api/getBooks";
import "bootstrap/dist/css/bootstrap.min.css";
import BookInfo from "../components/BookInfo";
import Meta from "../components/Meta.js";

const search = () => {
  const [title, setTitle] = useState("");
  const [books, setBooks] = useState(null);

  const handleSearch = async (e) => {
      e.preventDefault();
    let search = title.split(" ").join("-");
    let data = await getBooks(search);
    setBooks(data.map((info) => info.volumeInfo));
    setTitle("");
  };

  return (
    <div className="container mt-4">
        <Meta title="Book Search"/>
      <form className="row d-flex justify-content-center align-items-center" onSubmit={handleSearch}>
        <label className="pt-2">Enter book title: </label>
        <input
          type="text"
          className="ml-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="btn btn-dark ml-2" onClick={handleSearch}>
          Search
        </button>
      </form>
      {books ? books.map((book, i) => <BookInfo key={i} book={book} />) : null}
    </div>
  );
};

export default search;
