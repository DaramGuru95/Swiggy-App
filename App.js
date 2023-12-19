import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import Search from "./src/components/Search";
import OffersPage from "./src/components/OffersPage";
import Help from "./src/components/Help";
import Cart from "./src/components/Cart";
import User from "./src/components/UserPage";
import RestaurantMenu from "./src/components/RestaurantMenu";
// import Grocery from "./src/components/Grocery";

const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* {If my path = /} */}
      {/* <Body /> */}

      {/* {If my path = /about} */}
      {/* <About /> */}

      {/* {If my path = /contact} */}
      {/* <Contact /> */}
    </>
  );
};

export default AppLayout;

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/body",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/offers",
        element: <OffersPage />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/user",
        element: <User />,
      },
      // {
      //   path: "/cart",
      //   element: <Cart />,
      // },
      {
        path: "/restaurant",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },

  {
    path: "/cart",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);
