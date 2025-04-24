import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import BookTable from "./BookTable";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [showAvailable, setShowAvailable] = useState(false);
  const [viewType, setViewType] = useState("card");

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((res) => setBooks(res.data));
  }, []);

  const filteredBooks = showAvailable
    ? books.filter((book) => book.quantity > 0)
    : books;

  return (
    <div className="my-32 px-4">
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
