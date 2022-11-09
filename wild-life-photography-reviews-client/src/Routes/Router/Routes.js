import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Login from "../../Pages/Authentication/Login/Login";
import Register from "../../Pages/Authentication/Register/Register";
import Home from "../../Pages/Home/Home/Home";
import MyReview from "../../Pages/Review/MyReview/MyReview";
import UpdateReviews from "../../Pages/Review/MyReview/UpdateReviews";
import AllServices from "../../Pages/Services/AllServices/AllServices";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";
import Blog from "../../Pages/Shared/Blog/Blog";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/services",
            element:<AllServices></AllServices>
        },
        {
            path:"/allServicesDetail/:id",
            element:<ServiceDetails></ServiceDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path:"/addServices",
            element:<PrivateRoute><AddServices></AddServices></PrivateRoute>
        },
        {
            path:"/myReviews",
            element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
        },
        {
            path:"/updateReviews/:id",
            element:<PrivateRoute><UpdateReviews></UpdateReviews></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/reviews/${params.id}`) 
        },
        {
            path:"/blog",
            element:<Blog></Blog>
        },
        {
            path:"register",
            element:<Register></Register>
        },
        {
            path:"/login",
            element:<Login></Login>
        }
      ]
    }
])