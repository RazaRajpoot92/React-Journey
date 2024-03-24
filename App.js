import React from "react"
import ReactDOM from "react-dom/client"
import Card from "./src/components/Card"
import { createBrowserRouter,Outlet, RouterProvider } from "react-router-dom"
import "./index.css"
import About from "./src/components/About"
import ErrorPage from "./src/components/Error"
import Contact from "./src/components/Contact"
import Navbar from "./src/components/Navbar"
import Restaurant from "./src/components/Restaurant"


const Body = ()=>{

    return(
        <>
        <Navbar />
        <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Body />,
        errorElement:<ErrorPage />,
        children:[
            {
                path:"/",
                element:<Card />
            },
            {
                path:"about",
                element:<About />
            },
            {
                path:"contact",
                element:<Contact />,
            },
            {
                path:"restuarant/:id",
                element:<Restaurant />
            }
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
