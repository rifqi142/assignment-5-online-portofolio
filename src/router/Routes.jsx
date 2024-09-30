import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Project from "../pages/Project";
import Experience from "../pages/Experience";
import Interest from "../pages/Interest";
import Awards from "../pages/Awards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "skills", element: <Skills /> },
      { path: "project", element: <Project /> },
      { path: "experience", element: <Experience /> },
      { path: "interest", element: <Interest /> },
      { path: "awards", element: <Awards /> },
    ],
  },
]);

export default router;
