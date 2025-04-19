import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// const categories = [
//   {
//     id: 1,
//     name: "Fiction",
//     image: "https://img.freepik.com/free-photo/books-library_1150-17447.jpg",
//   },
//   {
//     id: 2,
//     name: "Science & Nature",
//     image:
//       "https://img.freepik.com/free-photo/science-laboratory_53876-32166.jpg",
//   },
//   {
//     id: 3,
//     name: "History",
//     image:
//       "https://img.freepik.com/free-photo/composed-book-school-supplies_23-2147654593.jpg",
//   },
//   {
//     id: 4,
//     name: "Business",
//     image:
//       "https://img.freepik.com/free-vector/sketch-business-icons_1284-44663.jpg",
//   },
// ];

const BookCategories = () => {
  const [categories, setCategories] = useState([]);
  axios
    .get("http://localhost:5000/categories")
    .then((res) => setCategories(res.data));

  return (
    <div className="py-10 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Explore Book Categories</h2>
        <p className="text-gray-600">
          Dive into your favorite genre and explore top picks!
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {categories.map((category) => (
          <Link to={`/category/${category.name}`} key={category.id}>
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition">
              <figure>
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-44 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center text-lg">
                  {category.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
