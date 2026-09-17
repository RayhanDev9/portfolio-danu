import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/sections/Home/Home";
import Experience from "./pages/sections/Experience/Experience";
import DesignMajlis from "./pages/sections/DesignMajlis/DesignMajlis";

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
        {
          path: "graphic-design/majlis",
          element: <DesignMajlis />,
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
