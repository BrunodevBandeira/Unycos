import React from 'react';
import "./App.css";
import AppRouter from "./AppRouter";
//  import LandingPage from "./pages/LandingPage/LandingPage";
 
const App = () => {
  return (
    <div className="App">
        <AppRouter />
        {/* <LandingPage /> */}
    </div>
  );
};


export default App;
