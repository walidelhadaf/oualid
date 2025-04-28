import React, { useState } from "react";
import * as Icon from "react-feather";
import "./App.scss";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Portfolios from "./pages/Portfolios";
import Resumes from "./pages/Resumes";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

function App() {
  const [lightMode, setLightMode] = useState(false); // Made it true if you want to load your site light mode primary

  lightMode
    ? document.body.classList.add("light")
    : document.body.classList.remove("light");

  const handleMode = () => {
    if (!lightMode) {
      setLightMode(true);
      document.body.classList.add("light");
    } else {
      setLightMode(false);
      document.body.classList.remove("light");
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home lightMode={lightMode} />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/resume",
      element: <Resumes />,
    },
    {
      path: "/portfolios",
      element: <Portfolios />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
    {
      path: "/blogs/:id/:title",
      element: <BlogDetails />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);

  return (
    <>
      <div className="light-mode">
        <span className="icon">
          <Icon.Sun />
        </span>
        <button
          className={
            lightMode ? "light-mode-switch active" : "light-mode-switch"
          }
          onClick={() => handleMode()}
        ></button>
      </div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
