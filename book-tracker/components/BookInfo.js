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
          <h3>{book.title}</h3>
          <h5>{book.authors[0]}</h5>
          <a href={book.infoLink} target="_blank"><img
            src={
              book.imageLinks
                ? book.imageLinks.smallThumbnail
                : "https://bit.ly/31OKFsp"
            }
            alt="book image"
          /></a>
        </div>
        <div className="col-12 col-md-8">
          <p>
            {book.description ? description : "No description on file"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
