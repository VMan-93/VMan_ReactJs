import ReactDOM from "react-dom/client";
import HeaderComp from "./Components/HeaderComp";
import BodyComp from "./Components/BodyComp";
// import AboutUsComp from "./Components/AboutUsComp";
import ContactUsComp from "./Components/ContactUsComp";
import ErrorComp from "./Components/ErrorComp"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router";
import RestaurantMenuComp from "./Components/RestaurantMenuComp";
// import GroceryComp from "./components/GroceryComp";
import { lazy, Suspense } from "react";
import ShimmerComp from "./Components/ShimmerComp";

const GroceryComp = lazy(() => import("./components/GroceryComp"));
const AboutUsComp = lazy(() => import("./Components/AboutUsComp"));

const AppLayoutComp = () => {
    return (
    <div className="app">
        <HeaderComp/>
        <Outlet />
    </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/", // Calling this as root rout
        element : <AppLayoutComp/>,
        children : [
            {
                path : "/",
                element : <BodyComp/>
            },
            {
                path : "/about-us", 
                element : <Suspense fallback={<h1>About Us Loading..!</h1>}><AboutUsComp/></Suspense>
            },
            {
                path : "/contact-us",
                element : <ContactUsComp/>
            }, 
            {
                path : "/grocery",
                element : <Suspense fallback={<h1>Grocery Loading..!</h1>}><GroceryComp/></Suspense>
            },
            // : stands for dynamic data
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenuComp/>}
        ],
        errorElement: <ErrorComp/>
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);