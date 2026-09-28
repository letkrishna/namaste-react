import React from "react";
import ReactDOM from "react-dom/client";

const parent = 
React.createElement("div",{id:"parent"},[
React.createElement("div", {id:"child", key:"child"},
[React.createElement("h1",{key:"heading-1"},"I am H1 tag"),
React.createElement("h2",{key:"heading-2"},"I am H2 tag")]
)


]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(parent);
//console.log(root.render());