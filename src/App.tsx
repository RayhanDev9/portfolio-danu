import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/sections/Home/Home";
import Experience from "./pages/sections/Experience/Experience";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "experience",
          element: <Experience />,
        },
      ],
    },
  ],
  {
    basename: "/portfolio-danu", // <-- Wajib ada agar routing pas dengan subpath GitHub Pages
  },
);

export default function App() {
  return <RouterProvider router={router} />;
}
