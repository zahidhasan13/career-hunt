import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Statistics from './components/Statistics/Statistics.jsx';
import Blog from './components/Blog/Blog.jsx';
import AppliedJob from './components/AppliedJob/AppliedJob.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "applied",
        element: <AppliedJob></AppliedJob>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
