import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Posts from './Pages/Posts/Posts';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';
import Comments from './Pages/Comments/Comments';

import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: (
        <div>
          <Navbar />
          <Outlet />
        </div>
      ),
      children: [
        { path: '/', element: <Home />, errorElement: <Error /> },
        {
          path: 'posts',
          element: (
            <div>
              <Posts />
            </div>
          ),
          errorElement: <Error />,
        },
        { path: 'about', element: <About />, errorElement: <Error /> },
        { path: 'comments/:postId', element: <Comments /> , errorElement: <Error />,},
      ],
    },
  ]);
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
