import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import About from "../page/aboutus.jsx";
import Home from "../page/home.jsx";
import Pet from "../page/pet.jsx";
import Information from "../page/Information.jsx";
import Authlayout from "./auth.jsx";
import Login from "../page/login.jsx";
import Register from "../page/register.jsx"
import Blog from "../page/blog.jsx";

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
        path: "pet",
        element:<Pet/>,
      },
      {
        path: "Information/:id",
        element: <Information />,
      },
      {
        path: "blog",
        element:<Blog/>,
      }
    ],
  },
  {  element: <Authlayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ]
    
  }
]);

export default router;
