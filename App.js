import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./src/components/Card";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import ErrorPage from "./src/components/Error";
import Navbar from "./src/components/Navbar";
import Restaurant from "./src/components/Restaurant";
import Cart from "./src/components/Cart";
import "./src/index.css";
import Login from "./src/components/Login";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/redux/appStore";

const Contact = lazy(() => import("./src/components/Contact"));

const Body = () => {
  const [user, setUser] = useState("Raza");

  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ username: user, password: "" }}>
          <Navbar />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Card />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "restuarant/:id",
        element: <Restaurant />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
