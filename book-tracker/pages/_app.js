import "../styles/globals.css";
import { useState, useEffect } from "react";
import { getBooks } from "./api/getBooks";
import "bootstrap/dist/css/bootstrap.min.css";
import BookInfo from "../components/BookInfo";

function MyApp({ Component, pageProps }) {
  const [title, setTitle] = useState("");
  const [books, setBooks] = useState(null);

  const handleSearch = async () => {
    let search = title.split(' ').join('-');
    let data = await getBooks(search);
    console.log(data.map((info) => info.volumeInfo));
    setBooks(data.map(info => info.volumeInfo));
    setTitle("");
  };

  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center align-items-center">
      <label className="pt-2">Enter book title: </label>
      <input type="text" className="ml-1" value={title} onChange={e => setTitle(e.target.value)}/>
      <button className="btn btn-dark ml-2" onClick={handleSearch}>Search</button>
      </div>
      {books ? books.map((book, i) => <BookInfo key={i} book={book} />) : null}
    </div>
  );
}

export default MyApp;
