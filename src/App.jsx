import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './global/Header'
import Footer from './global/Footer'
import Home from './pages/Home';
import About from './pages/About';


 const App = () => {

  return (
    
    <Router>
      <div>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path= "/about" element={<About/>}/>

          </Routes>
        </main>
        <Footer/>
      </div>


    </Router>

  )
}

export default App