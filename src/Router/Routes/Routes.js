import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AllFood from "../../Pages/Home/Foods/AllFood/AllFood";
import SingleFood from "../../Pages/Home/Foods/SingleFood/SingleFood";
import Home from "../../Pages/Home/Home/Home";
import Login from '../../Pages/Login/Login'
import SignUp from "../../Pages/Register/SignUp";

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
            }
        ]
    }
]);

export default router;

