import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Movie } from "./Pages/Movie";
import { Contact } from "./Pages/Contact";
import AppLayout from "./component/layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./Pages/ErrorPage";
import { getMoviesData } from "./api/GetAPIData";

const App = () => {
const router = createBrowserRouter ([

{
  path:"/",
  element:<AppLayout />,
 errorElement: <ErrorPage />,
  children:[
     {
    path:"/",
    element:<Home />,
  },
   {
    path:"/about",
    element:<About />,
  },
   {
    path:"/movie",
    element:<Movie />,
    loader: getMoviesData,
  },
   {
    path:"/contact",
    element:<Contact />,
  },
  ],
}
]);
  return <RouterProvider router={router} />;
};


export default App;
