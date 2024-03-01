import {
  createBrowserRouter,
  RouterProvider,
  // useRoutes,
} from "react-router-dom";

import AppLayout from "./components/app/AppLayout";
import Home from "./components/home/Home";
import Catalog from "./components/catalog/Catalog";

// Define the routes array with at least one route configuration
const router = createBrowserRouter([{
  element: <AppLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:type",
      element: <Catalog />,
    },
  ],
}]);

function App() {
  // const element = useRoutes(router);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
