import React from 'react';
import './App.css';
import Header from "./components/Header/header"
import About from "./components/About/about"
import Footer from './components/Footer/footer'
import Body from './components/Body/body'


const App = () => {
    return (
      <div>
        <Header/>
        <Body/>
        {/* <About/> */}
        <Footer/>
      </div>
    );
}

export default App;
