import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/sections/Home/Home";
import Experience from "./pages/sections/Experience/Experience";
import DesignMajlis from "./pages/sections/DesignMajlis/DesignMajlis";
import CreativeJourney from "./pages/sections/CreativeJourney/CreativeJourney";
import DesignHorison from "./pages/sections/DesignHorison/DesignHorison";
import DesainAstraotoshop from "./pages/sections/DesainAstraotoshop/DesainAstraotoshop";
import DesignMisterKlinner from "./pages/sections/DesignMisterKlinner/DesignMisterKlinner";
import DesainGeonerations from "./pages/sections/DesainGeonerations/DesainGeonerations";
import DesainViaFabula from "./pages/sections/DesainViaFabula/DesainViaFabula";
import Contact from "./pages/sections/Contact/Contact";
import Profile from "./pages/sections/Profile/Profile";
import GraphicMotion from "./pages/sections/GraphicMotion/GraphicMotion";

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
          path: "graphic-design/mister-klinner",
          element: <DesignMisterKlinner />,
        },
        {
          path: "graphic-design/geonerations",
          element: <DesainGeonerations />,
        },
        {
          path: "graphic-design/via-fabula",
          element: <DesainViaFabula />,
        },
        {
          path: "graphic-motion",
          element: <GraphicMotion />,
        },
        {
          path: "creative-journey",
          element: <CreativeJourney />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "profile",
          element: <Profile />,
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
