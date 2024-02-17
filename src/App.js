import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import CounterContainer from "./containers/CounterContainer";
import ApiContainer from "./containers/ApiContainer";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">CounterContainer</Link>
        </li>
        <li>
          <Link to="/api">ApiContainer</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" exact={true} element={<CounterContainer />} />
        <Route path="/api" element={<ApiContainer />} />
      </Routes>
    </div>
  );
}

export default App;
