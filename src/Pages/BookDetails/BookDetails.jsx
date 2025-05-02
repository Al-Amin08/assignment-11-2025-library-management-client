import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../Loader/Loader";
import useAxiosSecure from "../../AxiosInterceptor/useAxiosSecure";

const BookDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  // console.log(user);

  const [book, setBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [returnDate, setReturnDate] = useState("");

  useEffect(() => {
    axiosSecure(`/books/${id}`).then((res) => {
      setBook(res.data);
      toast.success("Successfully shown  book!");
      setLoading(false);
    });
  }, []);

  const handleBorrow = async () => {
    const borrowInfo = {
      bookId: book.bookId,
      userName: user.displayName,
      email: user.email,
      returnDate,
    };
    console.log(borrowInfo);
    await axios.post("http://localhost:5000/borrow", borrowInfo).then((res) => {
      console.log(res);
      toast.success("Successfully borrowed the book!");
    });
    setBook((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
    setShowModal(false);
  };

  //   if (!book) return <div>Loading...</div>;

  //   console.log(book);
  // const disableButton=

  useEffect(() => {
    document.title = "Details | ReadVault";
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="p-8 max-w-4xl mx-auto my-32">
      <Toaster position="top-center" reverseOrder={false} />
      <img
        src={book?.image}
        alt={book?.bookName}
        className="w-64 h-80 object-cover"
      />
      <h2 className="text-3xl font-bold mt-4">{book?.bookName}</h2>
      <p className="text-lg">Author: {book?.author}</p>
      <p>Category: {book?.category}</p>
      <p>Publisher: {book?.publisher}</p>
      <p>Year: {book?.yearOfPublishing}</p>
      <p>Total Pages: {book?.totalPages}</p>
      <p>Available Quantity: {book?.quantity}</p>
      {/* <Rating value={book?.rating} edit={false} size={24} /> */}
      <p className="mt-4">{book?.review}</p>

      <button
        className=" bg-blue-600 text-white px-4 py-2 mt-4 rounded disabled:opacity-50 transition hover:scale-105"
        onClick={() => setShowModal(true)}
        disabled={book?.quantity <= 0}
      >
        Borrow
      </button>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded w-[400px]">
            <h3 className="text-xl font-semibold mb-4">Borrow Book</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleBorrow();
              }}
            >
              <input
                type="text"
                value={user.displayName}
                disabled
                className="w-full border mb-2 p-2"
              />
              <input
                type="email"
                value={user.email}
                disabled
                className="w-full border mb-2 p-2"
              />
              <input
                type="date"
                required
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full border mb-4 p-2"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Confirm Borrow
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
