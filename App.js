import React from "react"
import ReactDOM from "react-dom/client"
import Card from "./src/components/Card"
import "./index.css"

const Body = ()=>{

    return(
        
        <div className="container">
            <Card  />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Body />)
