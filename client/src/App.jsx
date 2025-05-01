import React from 'react';
import Header from './components/Header';  
import Footer from './components/Footer';  
import AppRoutes from './routes/AppRoutes';  
import { BrowserRouter } from 'react-router-dom';  

function App() {
  return (
    <BrowserRouter>  
      <div>
        <Header />
        <AppRoutes />  This will render your routes
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;