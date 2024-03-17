import React from "react"
import ReactDOM from "react-dom/client"

const Title = ()=> <h1>React Component</h1>

const HeadingComponent = ()=>{
    return(
        <div>
            <Title />
            <h1>This is react component</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)
