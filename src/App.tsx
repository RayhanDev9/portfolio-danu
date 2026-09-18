import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/sections/Home/Home";
import Experience from "./pages/sections/Experience/Experience";
import DesignMajlis from "./pages/sections/DesignMajlis/DesignMajlis";
import CreativeJourney from "./pages/sections/CreativeJourney/CreativeJourney";
import DesignHorison from "./pages/sections/DesignHorison/DesignHorison";
import DesainAstraotoshop from "./pages/sections/DesainAstraotoshop/DesainAstraotoshop";

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
        {
          path: "graphic-design/horison",
          element: <DesignHorison />,
        },
        {
          path: "graphic-design/astraotoshop",
          element: <DesainAstraotoshop />,
        },
        {
          path: "creative-journey",
          element: <CreativeJourney />,
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
