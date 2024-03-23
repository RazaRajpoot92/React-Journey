import React from "react"
import ReactDOM from "react-dom/client"
import Card from "./src/components/Card"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import About from "./src/components/About"
import ErrorPage from "./src/components/Error"
import Contact from "./src/components/Contact"


const Body = ()=>{

    return(
        
        <div className="container">
            <Card  />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Body />,
        errorElement:<ErrorPage />
    },
    {
        path:"about",
        element:<About />
    },
    {
        path:"contact",
        element:<Contact />,
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
