import React from "react";
import ReactDOM from "react-dom/client";

//jsx
const Title= () => (
    <h1 className="heading">
        React using JSX
    </h1>
);

const title= (
    <h1 className="heading">
        React using JSX
    </h1>
);

const HeadingComponent= () => (
    <div id="container">
        {Title()}
        <Title />
        <Title></Title>
        <h1>Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);