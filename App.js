import React from "react"
import ReactDOM from "react-dom/client"
import Card from "./src/components/Card"

const Body = ()=>{
    return(
        <div>
            <Card />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Body />)
