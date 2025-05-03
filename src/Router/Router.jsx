import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CategoryBooks from "../Pages/CategoryBooks/CategoryBooks";
import BookDetails from "../Pages/BookDetails/BookDetails";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/category/:categoryName",
        element: <CategoryBooks></CategoryBooks>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-2025.vercel.app/categoryWiseBooks/${params.categoryName}`
          ),
      },
      {
        path: "/category/bookDetails/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowedBook",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/addBooks",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/allBooks",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-book/:id",
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
