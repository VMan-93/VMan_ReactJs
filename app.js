const heading = React.createElement("h1",{id:"header"},"Hello World from React..!"); //This is a react element ~ Js Object

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // React element is converted into the HTML tag