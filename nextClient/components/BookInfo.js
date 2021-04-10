import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BookInfo = ({ book }) => {
  const [description, setDescription] = useState(book.description);

  useEffect(() => {
    if (book.description?.split(" ").length > 75) {
      let newDescription = book.description.split(" ");
      newDescription.splice(75);
      setDescription(newDescription.join(" ") + "...");
    }
  }, [book]);

  return (
    <div className="mb-3">
      <div className="row my-4 border-top border-dark pt-4 align-items-center">
        <div className="col-12 col-md-4">
          <h2 className="text-center">{book.title}</h2>
          {book.authors ? <h4 className="text-center">{book.authors[0]}</h4> : null}
          <div className="d-flex justify-content-center">
            <a href={book.infoLink} target="_blank">
              <img
                src={
                  book.imageLinks
                    ? book.imageLinks.smallThumbnail
                    : "https://bit.ly/31OKFsp"
                }
                alt="book image"
              />
            </a>
          </div>
        </div>
        <div className="col-12 col-md-8 mt-3 mt-md-0">
          <p>{book.description ? description : "No description on file"}</p>
          <p className="text-center text-md-left">Number of pages: {book.pageCount}</p>
        </div>
      </div>
      <div className="row d-flex justify-content-center justify-content-md-end">
        <button className="btn btn-lg btn-primary mt-md-n5">
          Add to collection
        </button>
      </div>
    </div>
  );
};

export default BookInfo;
