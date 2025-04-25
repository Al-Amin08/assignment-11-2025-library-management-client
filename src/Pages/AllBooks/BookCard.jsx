import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  // const navigate = useNavigate();
  return (
    <div className="">
      <div className=" card p-4  rounded shadow-sm">
        <figure className="">
          <img
            src={book.image}
            alt={book.title}
            className="h-96 w-full object-contain mb-2"
          />
        </figure>
        <div className="card-body">
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Category: {book.category}</p>
          <p>Rating: {book.rating}</p>
          <Link
            className="btn mt-2 text-blue-600 text-start"
            // onClick={() => navigate(`/update-book/${book._id}`)}
            to={`/update-book/${book.bookId}`}
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
