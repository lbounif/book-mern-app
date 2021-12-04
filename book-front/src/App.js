import React, { useState } from 'react';
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from "./components/Header";
import Books from "./components/Books";
import Filters from "./components/Filters";
import Login from "./components/Login"

function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div>
      <Header title="BOOKS" />
      <div className="content">
        {/* <BrowserRouter> */}
            <Filters styles={{ flex: 1 }} />
            <Books styles={{ flex: 2 }} />
        {/* </BrowserRouter> */}
      </div>
    </div>
  );
}

export default App;
