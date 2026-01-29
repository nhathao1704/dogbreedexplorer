import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import About from "../page/aboutus.jsx";
import Home from "../page/home.jsx";
import Information from "../page/Information.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    children: [
      {
        index: "home",
        element: <Home/>,
      },
      {
        path: "aboutus",
        element: <About />,   
      },
      {
        path: "Information/:id",
        element: <Information />,
      }
    ],
  },
]);

export default router;
