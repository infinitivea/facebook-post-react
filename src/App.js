import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyPost from "./components/MyPost";

function App() {
  return (
    <div className="App">
      <MyPost name="Ball" text="Hello" width="200" height="150" />
      <MyPost
        name="Prayuth"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna eros, elementum sit amet eleifend ut, egestas et est. Nulla."
        width="20"
        height="10"
      />
    </div>
  );
}

export default App;
