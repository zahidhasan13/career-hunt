import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AppliedJob from "./components/AppliedJob/AppliedJob.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Home from "./components/Home/Home.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import "./index.css";
import loadedJobCategory from "./loader/JobCategoryLoader.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: loadedJobCategory,
            },
            {
                path: "/:id",
                element: <JobDetails />,
            },
            {
                path: "statistics",
                element: <Statistics></Statistics>,
            },
            {
                path: "applied",
                element: <AppliedJob></AppliedJob>,
            },
            {
                path: "blog",
                element: <Blog></Blog>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
