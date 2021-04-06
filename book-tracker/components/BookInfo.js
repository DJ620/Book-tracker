import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BookInfo = ({ book }) => {
    const [description, setDescription] = useState(book.description);

    useEffect(() => {
        if (book.description?.split(' ').length > 50) {
            let newDescription = book.description.split(' ');
            newDescription.splice(50);
            setDescription(newDescription.join(' ') + "...");
        };
    }, [book]);

  return (
    <div>
      <div className="row my-4 border-top border-dark pt-4 align-items-center">
        <div className="col-12 col-md-4">
          <h2 className="text-center">{book.title}</h2>
          <h4 className="text-center">{book.authors[0]}</h4>
          <div className="d-flex justify-content-center">
          <a href={book.infoLink} target="_blank"><img
            src={
              book.imageLinks
                ? book.imageLinks.smallThumbnail
                : "https://bit.ly/31OKFsp"
            }
            alt="book image"
          /></a>
          </div>
        </div>
        <div className="col-12 col-md-8 mt-3 mt-md-0">
          <p>
            {book.description ? description : "No description on file"}
          </p>
          <p className="">Number of pages: {book.pageCount}</p>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
