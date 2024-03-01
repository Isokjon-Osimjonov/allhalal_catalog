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
      {
        path: "*",
        element: <Home to="/" />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;


// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import AppLayout from "./components/app/AppLayout";
// import Home from "./components/home/Home";
// import Catalog from "./components/catalog/Catalog";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<AppLayout />}>
//           <Route index element={<Home />} />
//           <Route path="catalog/:type" element={<Catalog />} />
//           {/* Redirect from any unmatched route to the home page */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
