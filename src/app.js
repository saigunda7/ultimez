import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


/*const heading=React.createElement("h1",{id:"hai"},"Welcome to React");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
const jsxHeading=<h1 id="heading">namaste react</h1>
console.log(heading);
root.render(jsxHeading);*/





const Applayout =() =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);

     
