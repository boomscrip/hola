import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import "./styles.css";

function App() {
  return (
    <div className="App card">

      <h1 className="card-header">Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
