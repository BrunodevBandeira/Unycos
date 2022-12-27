import React from 'react';
import "./App.css";
// import AppRouter from "./AppRouter";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./pages/Footer/Footer"

const App = () => {
  return (
    <div className="App">
      <Header />
        <Main />
      <Footer />
    </div>
  );
};


export default App;
