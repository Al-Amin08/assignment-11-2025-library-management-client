import React, { useEffect, useState } from "react";

import BookCard from "./BookCard";
import BookTable from "./BookTable";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../Loader/Loader";
import useAxiosSecure from "../../AxiosInterceptor/useAxiosSecure";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [showAvailable, setShowAvailable] = useState(false);
  const [viewType, setViewType] = useState("card");
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/books").then((res) => {
      toast.success("Successfully loaded all the book!");
      setBooks(res.data);
      setLoading(false);
    });
  }, []);

  const filteredBooks = showAvailable
    ? books.filter((book) => book.quantity > 0)
    : books;
  useEffect(() => {
    document.title = "All Book | ReadVault";
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="my-32 px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setShowAvailable(!showAvailable)}
        >
          {showAvailable ? "Show All Books" : "Show Available Books"}
        </button>

        <select
          value={viewType}
          onChange={(e) => setViewType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>

      {viewType === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-10/12 mx-auto">
          {filteredBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      ) : (
        <BookTable filteredBooks={filteredBooks} />
      )}
    </div>
  );
};

export default AllBooks;
