import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './global/Header'
import Footer from './global/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Rooms from './pages/Rooms';



 const App = () => {

  return (
    
    <Router>
      <>
        <Header/>
        <main className="h-screen">
          <div className='container mx-auto py-10'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path= "/about" element={<About/>}/>
            <Route path='/contacto'element={<Contacto/>}/>
            <Route path='/nosotros'element={<Nosotros/>}/>
            <Route path='rooms'element={<Rooms/>}/>



          </Routes>
          </div>
        </main>
        <Footer/>
      </>


    </Router>

  )
}

export default App