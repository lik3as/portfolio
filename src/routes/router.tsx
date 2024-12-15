import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Projects from "./Projects";
import Layout from "../layout";

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: (
          <Root/>
        )
      },
      {
        path: "projects",
        children: [{
          index: true,
          element: <Projects/>
        }]
      }
    ]
  }
]);

export default router;
