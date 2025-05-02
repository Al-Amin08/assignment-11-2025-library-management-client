import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { HiH1 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

const BorrowedBooks = () => {
  const [borrowedBooksData, setBorrowedBooksData] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  console.log(user?.email);
  useEffect(() => {
    document.title = "BorrowedBooks | ReadVault";
  });
  useEffect(() => {
    axios
      .get(`http://localhost:5000/borrowed-books/${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setBorrowedBooksData(res.data);
        setLoading(false);
      });
  }, [user?.email]);
  if (loading) {
    return <Loader></Loader>;
  }
  const handleReturn = (_id, bookId) => {
    axios
      .post(`http://localhost:5000/return-books/${_id}`, { bookId })
      .then((res) => {
        console.log(res.data);
        setBorrowedBooksData((prev) => prev.filter((book) => book._id !== _id));
        toast.success("Successfully return the book!");
      });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="my-32  grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {borrowedBooksData.map((book) => (
          <div key={book._id} className="card bg-base-200 shadow-lg">
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
                <button
                  onClick={() => handleReturn(book._id, book.bookId)}
                  className="btn btn-primary btn-sm"
                >
                  Return
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
