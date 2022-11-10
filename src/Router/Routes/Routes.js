import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import AddFoods from "../../Pages/Home/Foods/AddFoods/AddFoods";
import AllFood from "../../Pages/Home/Foods/AllFood/AllFood";
import SingleFood from "../../Pages/Home/Foods/SingleFood/SingleFood";
import Home from "../../Pages/Home/Home/Home";
import Login from '../../Pages/Login/Login'
import SignUp from "../../Pages/Register/SignUp";
import EditReview from "../../Pages/Review/MyReview/EditReview";
import MyReview from "../../Pages/Review/MyReview/MyReview";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
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
                path:'/allfood',
                element:<AllFood></AllFood>
            },
            {
                path:'/singlefood/:id',
                element:<SingleFood></SingleFood>,
                loader:({params}) => fetch(`http://localhost:5000/allfood/${params.id}`)
            },
            {
                path:'/myreview',
                element:<PrivateRoutes><MyReview></MyReview></PrivateRoutes>
            },
            {
                path:'/addfoods',
                element:<PrivateRoutes><AddFoods></AddFoods></PrivateRoutes> 
            },
            {
                path:'/review/edit/:id',
                element:<EditReview></EditReview>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
]);

export default router;

