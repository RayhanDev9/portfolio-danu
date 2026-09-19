import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";

// Code splitting / Lazy-loaded route components for optimal bundle performance
const Home = lazy(() => import("./pages/sections/Home/Home"));
const Experience = lazy(() => import("./pages/sections/Experience/Experience"));
const DesignMajlis = lazy(() => import("./pages/sections/DesignMajlis/DesignMajlis"));
const DesignHorison = lazy(() => import("./pages/sections/DesignHorison/DesignHorison"));
const DesainAstraotoshop = lazy(() => import("./pages/sections/DesainAstraotoshop/DesainAstraotoshop"));
const DesignMisterKlinner = lazy(() => import("./pages/sections/DesignMisterKlinner/DesignMisterKlinner"));
const DesainGeonerations = lazy(() => import("./pages/sections/DesainGeonerations/DesainGeonerations"));
const DesainViaFabula = lazy(() => import("./pages/sections/DesainViaFabula/DesainViaFabula"));
const GraphicMotion = lazy(() => import("./pages/sections/GraphicMotion/GraphicMotion"));
const CreativeJourney = lazy(() => import("./pages/sections/CreativeJourney/CreativeJourney"));
const Contact = lazy(() => import("./pages/sections/Contact/Contact"));
const Profile = lazy(() => import("./pages/sections/Profile/Profile"));

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
          path: "motion-graphic",
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
