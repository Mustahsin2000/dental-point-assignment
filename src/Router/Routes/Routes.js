import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/services',
          element:<PrivateRoute><Services></Services></PrivateRoute>,
        },
        {
          path:'/services/:id',
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute> ,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/addservice',
          element:<AddService></AddService>
        },
        {
          path:'/review',
          element:<PrivateRoute><Review></Review></PrivateRoute>
        },
        {
          path: '/blogs',
          element:<Blogs></Blogs>
        }

      ]
    }
  ]);

  export default router;