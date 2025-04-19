import { Rating } from "@smastrom/react-rating";
import React from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import { Link, useLoaderData, useParams } from "react-router-dom";

const CategoryBooks = () => {
  const loadedData = useLoaderData();
  const { categoryName } = useParams();
  console.log(categoryName);
  return (
    <div className="mt-20 mb-20">
      <div className="py-10 px-4 bg-base-100 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center capitalize">
            Category: {categoryName}
          </h2>

          {loadedData.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {loadedData.map((book) => (
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
                    <p>Quantity: {book.quantity}</p>
                    <div className="">
                      Rating: {book.rating}
                      <ReactStarsRating
                        isHalf
                        value={book.rating}
                        className="flex"
                        isEdit={false}
                      />
                    </div>
                    <div className="card-actions justify-end mt-4">
                      <Link
                        to={`/category/bookDetails/${book.bookId}`}
                        className="btn btn-primary btn-sm"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-xl mt-10 text-gray-600">
              No books available in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryBooks;
