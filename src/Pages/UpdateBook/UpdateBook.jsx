import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../AxiosInterceptor/useAxiosSecure";

const UpdateBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/books/${id}`).then((res) => setBook(res.data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updated = {
      title: e.target.title.value,
      author: e.target.author.value,
      category: e.target.category.value,
      rating: parseFloat(e.target.rating.value),
      image: e.target.image.value, // image can be handled with a file input and upload if needed
    };
    axios.put(`http://localhost:5000/books/${id}`, updated).then((res) => {
      navigate("/allBooks");
      toast.success("Successfully Updated the book Info!");
      console.log(res);
    });
  };
  useEffect(() => {
    document.title = "Update | ReadVault";
  }, []);

  return (
    <form
      onSubmit={handleUpdate}
      className="max-w-xl mx-auto my-20 p-4 border shadow"
    >
      <h2 className="text-xl font-semibold mb-4">Update Book</h2>
      <legend className="fieldset-legend">Book Cover</legend>
      <input
        name="image"
        defaultValue={book.image}
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <legend className="fieldset-legend">Book Title</legend>
      <input
        name="title"
        defaultValue={book.bookName}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      <legend className="fieldset-legend">Book Author</legend>

      <input
        name="author"
        defaultValue={book.author}
        className="w-full mb-2 p-2 border"
        required
      />

      <legend className="fieldset-legend">Book Category</legend>

      <select
        name="category"
        defaultValue={book.category}
        className="w-full mb-2 p-2 border"
        required
      >
        <option value="Novel">Novel</option>
        <option value="Thriller">Thriller</option>
        <option value="History">History</option>
        <option value="Drama">Drama</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>

      <legend className="fieldset-legend">Book Rating</legend>

      <input
        name="rating"
        type="number"
        min="1"
        max="5"
        defaultValue={book.rating}
        className="w-full mb-2 p-2 border"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Update
      </button>
    </form>
  );
};

export default UpdateBook;
