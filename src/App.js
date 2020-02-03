import React from "react";
import Routers from "./Routing/routers";
import LandingPage from "./User/Components/Cart/summary";
import {Provider} from 'react-redux';
import store from '../src/Stores/store';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
       <div>
        <Routers />
       </div>
      </Provider>
    </div>
  );
}

export default App;
