import React from "react";
import ReactDOM from "react-dom/client";

// Create a React element
const heading = React.createElement("h1", 
{ id: "heading" }, 
"Namaste React"
);

// Get the root element from the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the React element into the root element
root.render(heading);

