import React from "react";
import Head from "./Head";
import Main from "./Main";
import About from "./About";
import List from "./List";
import Contact from "./Contact";
import Foot from "./Foot";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Head />
      <Main />
      <About />

      <List />
      <Contact />
      <Foot />
    </div>
  );
}
