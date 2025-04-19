import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CategoryBooks from "../Pages/CategoryBooks/CategoryBooks";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
            `http://localhost:5000/categoryWiseBooks/${params.categoryName}`
          ),
      },
      {
        path: "/category/bookDetails/:id",
        element: <BookDetails></BookDetails>,
      },
    ],
  },
]);
