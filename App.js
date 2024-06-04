import React from "react";
import ReactDOM from "react-dom/client";

const parent= React.createElement("div",{id:"parent"},
    [   
        React.createElement("div",{id:"child"},
        [
            React.createElement("h1",{},"This is React"),
            React.createElement("h2",{},"jfaskfnanf")
        ]),
        React.createElement("div",{id:"child2"},
        [
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h2",{},"I am h2 tag")
        ])
    ]
);

// Simple hello world program using react..
//const heading=React.createElement("h1", {id:"heading"}, "Hello world form React!");

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);