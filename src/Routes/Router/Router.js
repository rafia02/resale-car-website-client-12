import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import Allbuyers from "../../Pages/Dashboard/Allbuyers/Allbuyers";
import Allsellers from "../../Pages/Dashboard/Allsellers/Allsellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Mybuyer from "../../Pages/Dashboard/Mybuyer/Mybuyer";
import Myorders from "../../Pages/Dashboard/Myorders/Myorders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import DaynamicProduct from "../../Pages/DaynamicProduct/DaynamicProduct";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import PrivtRoute from "../PrivtRoute/PrivtRoute";

export  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, errorElement: <ErrorPage></ErrorPage>, children: [
        {path: '/', element: <Home></Home>},
        {path: '/catagory/:id', loader:({params})=>fetch(`https://resale-car-server-12.vercel.app/products/${params.id}`), element: <PrivtRoute><DaynamicProduct></DaynamicProduct></PrivtRoute>},
        {path: '/blog', element: <Blog></Blog>},
        {path: '/login', element: <Login></Login>},
        {path: '/signup', element: <Signup></Signup>},
    ]},

    {path: '/dashbord', element: <PrivtRoute><DashboardLayout></DashboardLayout></PrivtRoute>, children:[
        {path: '/dashbord', element: <Dashboard></Dashboard>},
        {path: '/dashbord/myorders', element: <Myorders></Myorders>},
        {path: '/dashbord/allbuyers', element: <Allbuyers></Allbuyers>},
        {path: '/dashbord/allsellers', element: <Allsellers></Allsellers>},
        {path: '/dashbord/addproduct', element: <AddProduct></AddProduct>},
        {path: '/dashbord/myproduct', element: <MyProduct></MyProduct>},
        {path: '/dashbord/mybuyer', element: <Mybuyer></Mybuyer>},
        {path: '/dashbord/payment/:id', loader: ({params})=> fetch(`http://localhost:5000/bookings/${params.id}`), element: <Payment></Payment>}
    ]},
   
])


