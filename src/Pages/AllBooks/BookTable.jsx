import React from "react";
import { Link } from "react-router-dom";

const BookTable = ({ filteredBooks }) => {
  // const navigate = useNavigate();
  console.log(filteredBooks);

  return (
    <div className="w-10/12 mx-auto">
      <table className=" table table-zebra">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book._id}>
              <td>
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-16 w-16 object-cover"
                />
              </td>
              <td>{book.bookName}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td> {book.rating}</td>
              <td>
                <Link
                  // onClick={() => navigate()}
                  className=" text-blue-600 font-bold hover:cursor-pointer "
                  to={`/update-book/${book.bookId}`}
                >
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
