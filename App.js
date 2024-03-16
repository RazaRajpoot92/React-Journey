import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement(
    "div", { className: "parent" }
    , [React.createElement("div", { className: "child1" }, React.createElement("h1", {}, "I'm child1 heading"))

        , React.createElement("div", { className: "child2" }, React.createElement("h1", {}, "I'm child2 heading"))
    ])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)
