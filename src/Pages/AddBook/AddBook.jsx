import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../AxiosInterceptor/useAxiosSecure";

const AddBook = () => {
  const axiosSecure = useAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newBook = Object.fromEntries(formData.entries());

    newBook.quantity = parseInt(newBook.quantity);
    newBook.rating = parseFloat(newBook.rating);
    newBook.image = formData.get("image");
    // const image = formData.get("image");
    console.log(newBook);

    axiosSecure.post("/addBooks", newBook).then((res) => {
      console.log(res);
      toast.success("Successfully added book.");
      formData.reset();
    });
  };
  useEffect(() => {
    document.title = "Add Book | ReadVault";
  }, []);
  return (
    <div className="my-32">
      <Toaster position="top-center" reverseOrder={false} />
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-6 bg-white shadow-md rounded"
      >
        <h2 className="text-xl font-semibold mb-4">Add a New Book</h2>

        <legend className="fieldset-legend">Book Title</legend>
        <input
          name="bookName"
          type="text"
          placeholder="Book Title"
          // onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <legend className="fieldset-legend">Author Name</legend>
        <input
          name="author"
          type="text"
          placeholder="Author Name"
          // onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <legend className="fieldset-legend">Quantity</legend>
        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          // onChange={handleChange}
          min={1}
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <legend className="fieldset-legend">Category</legend>
        <select
          name="category"
          // onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="Novel">Novel</option>
          <option value="Thriller">Thriller</option>
          <option value="History">History</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>

        <legend className="fieldset-legend">Description</legend>
        <textarea
          name="description"
          placeholder="Short Description"
          // onChange={handleChange}
          required
          className="w-full  p-2 border rounded"
        ></textarea>
        <legend className="fieldset-legend">Rating</legend>
        <input
          name="rating"
          type="number"
          min="1"
          max="5"
          placeholder="Rating (1 to 5)"
          // onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <div className="w-full">
          <legend className="fieldset-legend">Book Cover URL</legend>
          <input
            type="text"
            name="image"
            placeholder="Book Cover URL"
            className=" w-full mb-5 p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
