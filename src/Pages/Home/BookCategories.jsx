import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../AxiosInterceptor/useAxiosSecure";

const BookCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/categories")
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // .error("Error fetching categories:", err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center gap-7 my-40">
        <div className="skeleton h-52 w-52"></div>
        <div className="skeleton h-52 w-52"></div>
        <div className="skeleton h-52 w-52"></div>
        <div className="skeleton h-52 w-52"></div>
      </div>
    );
  }
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
