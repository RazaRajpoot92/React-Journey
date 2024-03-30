import React,{lazy,Suspense, useState} from "react"
import ReactDOM from "react-dom/client"
import Card from "./src/components/Card"
import { createBrowserRouter,Outlet, RouterProvider } from "react-router-dom"
import About from "./src/components/About"
import ErrorPage from "./src/components/Error"
import Navbar from "./src/components/Navbar"
import Restaurant from "./src/components/Restaurant"
import "./src/index.css"
import Login from "./src/components/Login"
import UserContext from "./src/utils/UserContext"

const Contact = lazy(()=> import("./src/components/Contact"))

const Body = ()=>{

    const [user, setUser] = useState("Raza")

    return(
        <>
        <UserContext.Provider value={{username:user,password:""}} >
        <Navbar />
        <Outlet  />
        </UserContext.Provider>
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
                element: <Suspense fallback={<h1>Loading...</h1>}>
                    <Contact />
                </Suspense> ,
            },
            {
                path:"restuarant/:id",
                element:<Restaurant />
            },
            {
                path:"/login",
                element:<Login />,
                
            }
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
