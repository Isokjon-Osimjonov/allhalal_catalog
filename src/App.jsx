import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";
import AppLayout from "./components/app/AppLayout";
import Home from "./components/home/Home";

//implimentation of react-router-dom
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <Catalog/>
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
