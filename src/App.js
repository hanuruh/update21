import './App.css';
import React from "react";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage"
import CodeBattlePage from "./pages/CodeBattlePage"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Patrocinios} from "./components/Patrocinios";



function App() {
  return (
    <div className="App">
        <MainPage/>
        <Patrocinios/>
        <Footer/>

    </div>
  );
}

export default App;
