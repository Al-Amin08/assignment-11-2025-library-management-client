import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { HiH1 } from "react-icons/hi2";
import { Link } from "react-router-dom";

const BorrowedBooks = () => {
  const [borrowedBooksData, setBorrowedBooksData] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/borrowed-books/${user?.email}`)
      .then((res) => setBorrowedBooksData(res.data));
  }, [user?.email]);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="my-32  grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {borrowedBooksData.map((book) => (
          <div key={book.bookId} className="card bg-base-200 shadow-lg">
            <figure>
              <img
                src={book.image}
                alt={book.bookName}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{book.bookName}</h2>
              <p>Author: {book.author}</p>
              <p>Category: {book.category}</p>
              <p>Borrowed Date: {book.borrowedAt}</p>
              <p>Return Date: {book.returnDate}</p>
              <div className="card-actions justify-end mt-4">
                <Link
                  to={`/category/bookDetails/${book.bookId}`}
                  className="btn btn-primary btn-sm"
                >
                  Return
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
