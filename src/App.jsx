import { Outlet, useLocation } from 'react-router-dom'
import React, {useEffect} from 'react';
import './assets/css/global.css'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'



export default function App() {  

  const location =useLocation();

  useEffect(() => {
    
    // Caminho atual da URL
    const path = location.pathname;

   // Mapeamento dos títulos
    let newTitle = 'Home';
    if (path === '/client') {
      
      newTitle = 'Client Page';
    } 
    else if (path === '/adm') {

      newTitle = 'Adm Page';
    }
    
    // Atualiza o título da página
    document.title = newTitle;
  }, [location.pathname]);

  return (
    <div className='App'>
      <Navbar />
      <Outlet />    
      <Footer />      
    </div>
  )
}