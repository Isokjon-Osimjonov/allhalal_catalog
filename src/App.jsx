import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AppLayout from "./components/app/AppLayout";
import Home from "./components/home/Home";
import Catalog from "./components/catalog/Catalog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Render the AppLayout component
    children: [
      {
        index: true,
        element: <Home />, // Render the Home component at the root path
      },
      {
        path: "/catalog/:type",
        element: <Catalog />, // Render the Catalog component for /catalog/:type paths
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
