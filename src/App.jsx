import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Posts from "./Pages/Posts/Posts";
import About from "./Pages/About/About";
import Error from "./Pages/Error/Error";
import Comments from "./Pages/Comments/Comments";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <div>
          <Navbar />
          <Outlet />
        </div>
      ),
      children: [
        {
          path: "/",
          element: (
              <Home />
          ),
          errorElement: <Error />,
        },
        {
          path: "posts",
          element: (
            <div>
              <Posts />
            </div>
          ),
          errorElement: <Error />,
        },
        { path: "about", element: <About />, errorElement: <Error /> },
        {
          path: "comments/:postId",
          element: <Comments />,
          errorElement: <Error />,
        },
        {
          path: "login",
          element: (
            <div className="login-page-wrapper">
              <Login />
            </div>
          ),
          errorElement: <Error />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
